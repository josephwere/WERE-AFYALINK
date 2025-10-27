import Link from 'next/link'
import dynamic from 'next/dynamic'
const NeuroEdgeAI = dynamic(() => import('./components/NeuroEdgeAI'), { ssr: false })
export default function Page() {
  return (
    <main className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">AfyaLink Dashboard</h1>
        <nav className="space-x-4">
          <Link href='/login' className="text-indigo-600">Login</Link>
          <Link href='/register' className="text-indigo-600">Register</Link>
        </nav>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">Active Patients<br/><span className="text-2xl font-bold">128</span></div>
            <div className="p-4 border rounded">Appointments Today<br/><span className="text-2xl font-bold">34</span></div>
            <div className="p-4 border rounded">Available Beds<br/><span className="text-2xl font-bold">12</span></div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Patients</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {Array.from({length:6}).map((_,i)=>(
                <div key={i} className="p-3 bg-gray-50 rounded border">Patient {i+1}</div>
              ))}
            </div>
          </div>
        </div>
        <aside className="p-4 bg-white rounded-lg shadow">
          <NeuroEdgeAI />
        </aside>
      </section>
    </main>
  )
}
