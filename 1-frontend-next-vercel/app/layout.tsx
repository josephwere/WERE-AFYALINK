import './globals.css'
export const metadata = {
  title: 'AfyaLink by GoldEdge Labs',
  description: 'AfyaLink Global Edition — Dashboard and AI assistant (mock mode)'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}
