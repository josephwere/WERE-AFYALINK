import './globals.css'
export const metadata = {
  title: 'AfyaLink — Global',
  description: 'AfyaLink Global Edition — Dashboard and AI assistant (mock mode)'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
