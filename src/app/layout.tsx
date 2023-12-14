import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import ReactQueryProvider from '@/utils/react-query-provider'

export const metadata: Metadata = {
  title: 'Twitter on Nextjs',
  description: 'Twitter\'s clone application',
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Header username='Aliaksandr Yakushau' />
          {props.children}
          {props.modals}
        </ReactQueryProvider>        
      </body>
    </html>
  )
}
