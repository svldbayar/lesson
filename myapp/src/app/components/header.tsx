interface HeaderProps {
  siteName: string;
}

export default function Header({ siteName }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-white-600 to-indigo-700 text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold tracking-wide">{siteName}</h1>
        <nav className="space-x-6 text-lg">
          <a href="/" className="hover:text-black-300 transition">Нүүр</a>
          <a href="/about" className="hover:text-black-300 transition">Миний тухай</a>
          <a href="/contact" className="hover:text-black-300 transition">Холбоо барих</a>
        </nav>
      </div>
    </header>
  );
}