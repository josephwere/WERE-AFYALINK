'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Login(){
  const [email,setEmail]=useState(''); const [pw,setPw]=useState('')
  const router = useRouter()
  function submit(e:any){ e.preventDefault(); localStorage.setItem('afya_user', JSON.stringify({email})); router.push('/') }
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input value={pw} onChange={e=>setPw(e.target.value)} placeholder="Password" type="password" className="w-full p-2 border rounded" />
        <button className="w-full py-2 bg-indigo-600 text-white rounded">Login</button>
      </form>
      <p className="mt-3 text-sm">Don't have an account? <a href="/register" className="text-indigo-600">Register</a></p>
    </div>
  )
}
