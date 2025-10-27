'use client'
import { useState } from 'react'
export default function NeuroEdgeAI(){ 
  const [messages, setMessages] = useState([{from:'system', text:'NeuroEdge AI ready (mock).'}])
  const [input, setInput] = useState('')
  async function send(){
    if(!input) return
    setMessages(m=>[...m,{from:'user',text:input}])
    const reply = 'NeuroEdge (mock): This is a demo reply for "'+input+'"'
    setInput('')
    setTimeout(()=> setMessages(m=>[...m,{from:'ai',text:reply}]),600)
  }
  return (
    <div className="p-3">
      <h3 className="font-bold mb-2">NeuroEdge AI</h3>
      <div className="h-48 overflow-auto bg-gray-50 p-2 mb-2 rounded">
        {messages.map((m,i)=>(<div key={i} className={m.from==='user'?'text-right':'text-left'}><small className="text-gray-500">{m.from}</small><div>{m.text}</div></div>))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={(e)=>setInput(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Ask NeuroEdge..." />
        <button onClick={send} className="px-3 py-2 bg-indigo-600 text-white rounded">Send</button>
      </div>
    </div>
  )
}
