export default function PatientCard({ patient }: any) {
  return (
    <div className="bg-white shadow p-4 rounded-xl hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{patient.name}</h3>
      <p className="text-sm text-gray-600">Age: {patient.age}</p>
      <p className="text-sm text-gray-600">Condition: {patient.condition}</p>
    </div>
  )
}