import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-slate-50">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          <span className="font-bold">friends</span>.
        </span>
      </p>
    </main>
  )
}