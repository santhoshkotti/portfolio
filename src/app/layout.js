import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Santhoshkumar P - Web Developer & Designer',
  description: 'Explore the portfolio of Santhoshkumar P, showcasing projects, skills, and achievements in web development and design.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Santhoshkumar P - Web Developer & Designer" />
        <meta property="og:description" content="Explore the portfolio of Santhoshkumar P, showcasing projects, skills, and achievements in web development and design." />
        <meta property="og:image" content="/path/to/image.jpg" /> {/* Add a relevant image */}
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Santhoshkumar P - Web Developer & Designer" />
        <meta name="twitter:description" content="Explore the portfolio of Santhoshkumar P." />
        <meta name="twitter:image" content="/path/to/image.jpg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
