import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'La Quadra - Marketing Digital',
  description: ''
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>{props.children}</body>
    </html>
  )
}
