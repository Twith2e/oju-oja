"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((p) => p);
  return (
    <nav>
      <ul className="flex gap-2 text-sm text-gray-500">
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to}>
              <Link
                className={pathname === to ? "text-blue-300" : ""}
                href={to}
              >
                / {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
