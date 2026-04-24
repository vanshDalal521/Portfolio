import type { Metadata } from "next";
import "./globals.css";
import Layout from '@/components/Layout';
import LenisProvider from '@/components/providers/LenisProvider';
import LoadingScreen from '@/components/ui/LoadingScreen';

export const metadata: Metadata = {
  title: "Vansh Dalal | Frontend Developer",
  description: "Award-winning portfolio of Vansh Dalal, a creative frontend developer specializing in immersive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <LoadingScreen />
        <LenisProvider>
          <Layout>
            {children}
          </Layout>
        </LenisProvider>
      </body>
    </html>
  );
}
