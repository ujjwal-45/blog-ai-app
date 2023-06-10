import './globals.css';
import { Open_Sans } from "next/font/google";
import Navbar from './(shared)/Navbar';
import Footer from './(shared)/Footer';

const openSans = Open_Sans({
  subsets: ["latin"],
})

export const metadata = {
  title: 'Blog AI App',
  description: 'Blog built in Next JS powered by AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
