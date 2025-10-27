import { useEffect, useState } from "react"
import { mockApi } from "../api/mockApi"
import PatientCard from "../components/PatientCard"

export default function Patients() {
  const [patients, setPatients] = useState<any[]>([])
  useEffect(() => {
    mockApi.getPatients().then(setPatients)
  }, [])
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Patients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map(p => <PatientCard key={p.id} patient={p} />)}
      </div>
    </div>
  )
}