import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Patients from "./pages/Patients"

function Home() {
  return (
    <div className="p-6 text-gray-700">
      <h2 className="text-2xl font-bold">Welcome to AfyaLink</h2>
      <p className="mt-2">Smart hospital management system with offline support.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patients" element={<Patients />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}