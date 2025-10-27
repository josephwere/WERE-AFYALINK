import { useState } from 'react'
export default function NeuroEdgeAI(){
  const [messages,setMessages]=useState([{from:'system',text:'NeuroEdge AI ready (mock).'}])
  const [input,setInput]=useState('')
  async function send(){
    if(!input)return
    setMessages(m=>[...m,{from:'user',text:input}])
    const reply=`NeuroEdge Mock Reply: received "${input}". Suggest vitals + CBC.`
    setMessages(m=>[...m,{from:'ai',text:reply}])
    setInput('')
  }
  return(
    <div>
      <h3 className="font-bold mb-2">NeuroEdge AI</h3>
      <div className="h-40 overflow-auto bg-gray-50 p-2 mb-2 rounded">
        {messages.map((m,i)=>(<div key={i}><small className="text-gray-500">{m.from}</small><div>{m.text}</div></div>))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 border p-2 rounded" placeholder="Ask NeuroEdge..." />
        <button onClick={send} className="bg-indigo-600 text-white px-3 py-2 rounded">Send</button>
      </div>
    </div>
  )
}
