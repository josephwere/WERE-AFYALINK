import { useState, useEffect } from 'react'
import NeuroEdgeAI from './components/NeuroEdgeAI'

function App(){
  const [patients,setPatients]=useState<any[]>([])
  useEffect(()=>{
    fetch('/api/patients.json').then(r=>r.json()).then(setPatients)
  },[])
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">AfyaLink <span className="text-indigo-600">by GoldEdge Labs</span></h1>
        <div><a href="#" className="text-indigo-600 mr-4">Login</a><a href="#" className="text-indigo-600">Register</a></div>
      </header>
      <section className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Active Patients</h2>
          <ul className="divide-y">
            {patients.map(p=>(<li key={p.id} className="p-2">{p.name} — {p.age} yrs</li>))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <NeuroEdgeAI />
        </div>
      </section>
    </div>
  )
}
export default App
