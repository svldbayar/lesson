interface FooterProps {
  year: number;
  siteName: string;
}

export default function Footer({ year, siteName }: FooterProps) {
  return (
    <footer className="bg-indigo-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-sm">&copy; {year} {siteName}. Бүх эрх хуулиар хамгаалагдсан.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
        </div>
      </div>
    </footer>
  );
}