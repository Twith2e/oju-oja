"use client";

import { titleCase } from "@/app/utils/case";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const pathnames = pathname.split("/").filter((p) => p);
  const lastPathname = pathnames[pathnames.length - 1];
  return (
    <nav>
      <ul className="flex gap-2 text-base text-gray-500">
        <li>
          <Link className="hover:text-[#3c50e0]" href="/">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to}>
              <span className="mr-2">/</span>
              {value !== lastPathname ? (
                <Link
                  className={pathname === to ? "text-[#3c50e0]" : ""}
                  href={to}
                >
                  {titleCase(value)}
                </Link>
              ) : (
                <span className="text-[#3c50e0]">{titleCase(value)}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
