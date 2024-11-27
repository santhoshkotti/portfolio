// layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Santhoshkumar P - Web Developer & Designer',
  description: 'Explore the portfolio of Santhoshkumar P, showcasing projects, skills, and achievements in web development and design.',
  openGraph: {
    title: 'Santhoshkumar P - Web Developer & Designer',
    description: 'Explore the portfolio of Santhoshkumar P.',
    url: 'https://santhoshkumar-punniyakotti.netlify.app/',
    images: [
      {
        url: '/icon.ico', // Update with your image path
        width: 800,
        height: 600,
        alt: 'Portfolio of Santhoshkumar P',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
