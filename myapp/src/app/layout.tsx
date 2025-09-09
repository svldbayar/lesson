import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Sidebar from "@/app/components/sidebar";

export const metadata: Metadata = {
  title: "Миний Вэб",
  description: "Next.js Layout demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className="flex flex-col min-h-screen font-sans bg-gray-50">
        {/* Header */}
        <Header siteName="Миний Вэб" />

        {/* Main Section */}
        <div className="flex flex-grow container mx-auto">
          <Sidebar />
          <main className="flex-grow p-6 bg-white shadow-md rounded-md mt-4">
            {children}
          </main>
        </div>

        {/* Footer */}
        <Footer year={2025} siteName="Миний Вэб" />
      </body>
    </html>
  );
}