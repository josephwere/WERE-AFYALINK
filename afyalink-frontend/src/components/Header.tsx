import { useOffline } from "../hooks/useOffline"
export default function Header() {
  const isOffline = useOffline()
  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between items-center shadow-sm">
      <h1 className="text-lg font-semibold">AfyaLink Dashboard</h1>
      <span className={\`text-sm px-3 py-1 rounded-full \${isOffline ? "bg-red-500 text-white" : "bg-green-500 text-white"}\`}>
        {isOffline ? "Offline Mode" : "Online"}
      </span>
    </div>
  )
}