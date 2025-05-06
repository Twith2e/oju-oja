import SearchBar from "../search-bar";
import { LuPhoneCall } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";
import Sidebar from "../sidebar";

export default async function TopHeader() {
  const res = await fetch("http://localhost:3000/api/carts", {
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text();
    console.error("Fetch /api/carts failed:", res.status, text);
    // You can throw or return fallback UI here
    throw new Error(`API error: ${res.status}`);
  }
  const carts = await res.json();
  console.log("carts:", carts);

  return (
    <div className="py-6 px-4 lg:px-10 gap-3 flex flex-col md:flex-row md:justify-between">
      <div className="flex flex-col md:flex-row md:items-center xl:gap-20">
        <Link href="/" className="text-3xl text-[#3c50e0] font-bold">
          OJU OJA
        </Link>
        <SearchBar />
      </div>
      <div className="flex gap-8 items-center justify-between w-full xl:w-fit">
        <ul className="flex items-center gap-8 text-sm">
          <li className="xl:flex items-center gap-2 hidden">
            <LuPhoneCall size={24} color="#3C50E0" />
            <div className="flex flex-col">
              <span className="text-[0.625rem]">24/7 support</span>
              <span>08061417226</span>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CiUser size={24} color="#3C50E0" />
            <Link href="">Sign In</Link>
          </li>
          <li className="relative">
            <Link className="flex items-center gap-2" href="">
              <BsCartCheck size={24} color="#3C50E0" />
              <div className="flex flex-col items-end">
                <span className="text-[0.625rem]">CART</span>
                <span>$0</span>
              </div>
              <span className="h-3 w-3">{carts.length}</span>
            </Link>
          </li>
        </ul>
        <Sidebar />
      </div>
    </div>
  );
}
