import { Link } from "react-router-dom"
export default function Sidebar() {
  return (
    <div className="bg-slate-900 text-white h-full w-64 p-5 flex flex-col gap-4">
      <h2 className="text-xl font-bold">AfyaLink</h2>
      <Link to="/">🏠 Dashboard</Link>
      <Link to="/patients">👨‍⚕️ Patients</Link>
      <Link to="/appointments">📅 Appointments</Link>
      <Link to="/inventory">💊 Inventory</Link>
      <Link to="/reports">📊 Reports</Link>
    </div>
  )
}