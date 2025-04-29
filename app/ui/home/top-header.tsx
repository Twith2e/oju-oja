import SearchBar from "../search-bar";
import { LuPhoneCall } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="py-6 px-24 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span>OJU OJA</span>
        <SearchBar />
      </div>
      <ul className="flex items-center gap-8 text-sm">
        <li className="flex items-center gap-2">
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
    </div>
  );
}
