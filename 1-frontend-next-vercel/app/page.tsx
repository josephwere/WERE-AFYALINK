import dynamic from 'next/dynamic'
import Link from 'next/link'
const NeuroEdgeAI = dynamic(() => import('./components/NeuroEdgeAI'), { ssr: false })
export default function Page(){
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">AfyaLink <span className="text-indigo-600">by GoldEdge Labs</span></h1>
        <nav>
          <Link href="/login" className="text-indigo-600 mr-4">Login</Link>
          <Link href="/register" className="text-indigo-600">Register</Link>
        </nav>
      </header>
      <section className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">Active Patients<br/><span className="text-2xl font-bold">128</span></div>
            <div className="p-4 border rounded">Appointments Today<br/><span className="text-2xl font-bold">34</span></div>
            <div className="p-4 border rounded">Available Beds<br/><span className="text-2xl font-bold">12</span></div>
          </div>
        </div>
        <aside className="p-4 bg-white rounded shadow">
          <NeuroEdgeAI />
        </aside>
      </section>
    </main>
  )
}
