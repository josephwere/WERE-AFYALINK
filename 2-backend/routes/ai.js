const express = require('express');
const router = express.Router();
router.post('/', async (req, res) => {
  const { message } = req.body || {};
  const AI_URL = process.env.AI_SERVICE_URL || process.env.VITE_AI_API_URL || '';
  if (!AI_URL) return res.json({ reply: `NeuroEdge Mock Reply: received "${message}"` });
  try {
    const fetch = global.fetch || (await import('node-fetch')).default;
    const resp = await fetch(`${AI_URL.replace(/\/+$/, '')}/v1/respond`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message })
    });
    const data = await resp.json();
    return res.json({ reply: data.reply || data.output || 'No reply from AI service' });
  } catch (err) {
    console.error('AI integration error', err);
    return res.json({ reply: `NeuroEdge Mock Reply: could not reach AI service.` });
  }
});
module.exports = router;
