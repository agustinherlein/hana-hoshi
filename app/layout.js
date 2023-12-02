import { Inter } from 'next/font/google'
import './globals.css'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hana Hoshi XD',
  description: 'xd',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}