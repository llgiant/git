import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: "My Blog",
  description: 'Created by llgiant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        {children}
        </main>
      </body>
    </html>
  )
}