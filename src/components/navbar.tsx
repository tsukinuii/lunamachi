"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-accent text-accent-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/logo/logo_lunamachi.png"
              alt="LunaMachi Logo"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold">LunaMachi</span>
              <span className="text-xs text-accent-foreground/80 hidden lg:block">
                Your Moonlit Marketplace
              </span>
            </div>
          </Link>
          <div>
            <Link
              href="/login"
              className="btn btn-primary bg-blue-900 rounded-lg p-2"
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
