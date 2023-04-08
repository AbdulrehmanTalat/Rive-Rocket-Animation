import './globals.css'

export const metadata = {
  title: 'Rive Rocket Animation',
  description: 'Simple Rocket Animation With Rive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#313131]'>
        {children}
        </body>
    </html>
  )
}
