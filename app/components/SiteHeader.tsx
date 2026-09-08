import Link from "next/link";
import { company } from "../company";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {company.name}
        </Link>
        <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/#services" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Services
          </Link>
          <Link href="/#pricing" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Pricing
          </Link>
          <Link href="/#about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            About
          </Link>
          <Link href="/#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
