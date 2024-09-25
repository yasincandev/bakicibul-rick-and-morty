import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Shared/Navbar';
import { ThemeProvider } from 'next-themes';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Rick and Morty Universe',
  description: 'Explore the world of Rick and Morty',
  openGraph: {
    title: 'Rick and Morty Character Database',
    description:
      'Dive into the expansive universe of Rick and Morty characters. Uncover detailed insights about your favorite characters from the series.',
    type: 'website',
    url: 'https://rickandmorty-explorer.com',
    siteName: 'Rick and Morty Character Database',
    locale: 'en_US',
    images: [
      {
        url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute='class'>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
