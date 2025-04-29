import Link from "next/link";
import { RiRefreshLine, RiHeartLine } from "react-icons/ri";

export default function BottomHeader() {
  return (
    <div className="flex items-center justify-between w-full text-sm font-bold border-y border-y-gray-300 px-24">
      <ul className="flex gap-6 items-center">
        <li className="hover:text-[#3C50E0]">
          <Link className="py-6 bottom-nav-link" href="">
            Popular
          </Link>
        </li>
        <li className="hover:text-[#3C50E0]">
          <Link className="py-6 bottom-nav-link" href="">
            Shop
          </Link>
        </li>
        <li className="hover:text-[#3C50E0]">
          <Link className="py-6 bottom-nav-link" href="">
            Contact
          </Link>
        </li>
        <li className="hover:text-[#3C50E0]">
          <Link className="py-6 bottom-nav-link" href=""></Link>
        </li>
      </ul>
      <ul className="flex gap-6 items-center">
        <li className="hover:text-[#3C50E0] flex gap-2 items-center">
          <RiRefreshLine />
          <Link className="py-6 bottom-nav-link" href="">
            Recently viewed
          </Link>
        </li>
        <li className="hover:text-[#3C50E0] flex gap-2 items-center">
          <RiHeartLine />
          <Link className="py-6 bottom-nav-link" href="">
            Wishlist
          </Link>
        </li>
      </ul>
    </div>
  );
}
