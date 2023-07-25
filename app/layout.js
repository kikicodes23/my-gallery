import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'My gallery - Erika',
  description: 'This is a React.js project building a page about my gallery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
