import { Metadata } from 'next'
import './globals.css'

import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import Header from '@/components/shared/header'
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
