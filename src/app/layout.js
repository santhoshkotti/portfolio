import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Santhoshkumar P - Web Developer & Designer',
  description: 'Explore the portfolio of Santhoshkumar P, showcasing projects, skills, and achievements in web development and design.',
  openGraph: {
    title: 'Santhoshkumar P - Web Developer & Designer',
    description: 'Explore the portfolio of Santhoshkumar P, showcasing projects, skills, and achievements in web development and design.',
    images: [
      {
        url: 'icon.ico', // Update with the correct path
        alt: 'Portfolio Image Alt Text',
      },
    ],
    url: 'https://www.yourwebsite.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santhoshkumar P - Web Developer & Designer',
    description: 'Explore the portfolio of Santhoshkumar P.',
    images: ['icon.ico'], // Update with the correct path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
