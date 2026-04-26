';'
import { ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>TEC-Respiração</title>
      </Head>
      {children}
    </>
  )
}

export default Layout
