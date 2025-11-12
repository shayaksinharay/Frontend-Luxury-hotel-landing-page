import './globals.css'

export const metadata = {
  title: 'Luxort',
  description: 'Luxort landing replica'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex justify-center">
          <div className="w-full max-w-[760px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}