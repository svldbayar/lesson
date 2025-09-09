export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-200 p-6 hidden md:block">
      <nav>
        <ul className="space-y-4 text-lg">
          <li>
            <a href="/" className="block p-2 rounded hover:bg-blue-100 transition">
              🏠 Нүүр
            </a>
          </li>
          <li>
            <a href="/about" className="block p-2 rounded hover:bg-blue-100 transition">
              👤 Миний тухай
            </a>
          </li>
          <li>
            <a href="/contact" className="block p-2 rounded hover:bg-blue-100 transition">
              ✉️ Холбоо барих
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}