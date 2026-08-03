import Link from 'next/link';
import { Metadata } from 'next';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Page not found | Dynamics Consulting',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-[#0D1117] text-[#E6EDF3] flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="text-[#00B4D8] font-mono text-sm tracking-widest uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#E6EDF3] mb-6">
          Page not found
        </h1>
        <p className="text-[#7D8FA3] text-lg max-w-md mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#00C8F0] text-[#0D1117] font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
