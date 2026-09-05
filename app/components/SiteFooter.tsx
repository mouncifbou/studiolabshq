import Link from "next/link";
import { company } from "../company";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <nav className="flex gap-5">
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Terms of Service
            </Link>
          </nav>
        </div>
        <p>
          {company.address} · {company.phone} · {company.email}
        </p>
      </div>
    </footer>
  );
}
