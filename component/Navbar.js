"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center shadow-sm">
            
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            Aushadhi <span className="text-green-500"></span>
          </h2>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li><Link href="/" className="text-gray-600 hover:text-green-500">Medicine</Link></li>
          <li><Link href="/" className="text-gray-600 hover:text-green-500">Category</Link></li>
          <li><Link href="/" className="text-gray-600 hover:text-green-500">Order</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">

          {session ? (
            <>
              <span className="text-sm text-gray-600">
                {session.user.name}
              </span>

              <button
                onClick={() => signOut()}
                className="px-4 py-1.5 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-4 py-1.5 text-sm font-medium border border-green-500 text-green-500 rounded-md hover:bg-green-50"
            >
              Login
            </button>
          )}

        </div>

      </div>
    </nav>
  );
}