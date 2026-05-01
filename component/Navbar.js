import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Name */}
        <div className="flex  justify-between space-x-2">
          <Image
            src="/logo.png"
            alt="Aushadi AI Logo"
            width={40}
            height={40}
          />
          <h2 className="text-2xl font-bold text-green-500">
            Aushadi AI
          </h2>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <Link href="/" className="text-gray-600 hover:text-green-500 transition">
              Medicine
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-green-500 transition">
              Category
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-green-500 transition">
              Order
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-1.5 text-sm font-medium border border-green-500 text-green-500 rounded-md hover:bg-green-50 transition">
            Login
          </button>
          <button className="px-4 py-1.5 text-sm font-medium bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
}