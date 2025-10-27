'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Register(){
  const [email,setEmail]=useState('')
  const router = useRouter()
  function submit(e:any){ e.preventDefault(); localStorage.setItem('afya_user', JSON.stringify({email})); router.push('/') }
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input placeholder="Full name" className="w-full p-2 border rounded" />
        <input placeholder="Password" type="password" className="w-full p-2 border rounded" />
        <button className="w-full py-2 bg-indigo-600 text-white rounded">Join Us</button>
      </form>
    </div>
  )
}
