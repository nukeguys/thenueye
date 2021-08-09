import React from 'react';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full text-center p-5">
      <Link href="/">
        <a className="font-serif text-2xl font-black">TheNueye</a>
      </Link>
    </header>
  );
}
