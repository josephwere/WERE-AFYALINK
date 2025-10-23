import { get, set } from "idb-keyval"

const mockPatients = [
  { id: 1, name: "John Doe", age: 30, condition: "Malaria" },
  { id: 2, name: "Mary Wanjiku", age: 45, condition: "Diabetes" },
  { id: 3, name: "Peter Otieno", age: 27, condition: "Typhoid" }
]

export const mockApi = {
  getPatients: async () => {
    const cached = await get("patients")
    if (cached) return cached
    await set("patients", mockPatients)
    return mockPatients
  },
  addPatient: async (patient: any) => {
    const patients = (await get("patients")) || []
    const updated = [...patients, { ...patient, id: Date.now() }]
    await set("patients", updated)
    return updated
  }
}