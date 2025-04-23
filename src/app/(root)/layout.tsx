import Header from '@/components/shared/header/index'
import Footer from '@/components/shared/footer'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 flex flex-col p-2'>{children}</main>
      <Footer />
    </div>
  )
}
