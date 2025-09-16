import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 shadow mb-6">
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/about" className="mr-4">About</Link>
      <Link href="/blog" className="mr-4">Blog</Link>
    </nav>
  );
}
