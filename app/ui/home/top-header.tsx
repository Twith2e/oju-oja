import SearchBar from "../search-bar";
import { LuPhoneCall } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";
import Sidebar from "../sidebar";

export default function TopHeader() {
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
          <li className="flex items-center gap-2">
            <BsCartCheck size={24} color="#3C50E0" />
            <div className="flex flex-col items-end">
              <span className="text-[0.625rem]">CART</span>
              <span>$0</span>
            </div>
          </li>
        </ul>
        <Sidebar />
      </div>
    </div>
  );
}
