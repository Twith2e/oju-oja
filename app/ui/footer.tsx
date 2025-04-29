import { TfiLocationPin } from "react-icons/tfi";
import { PiPhoneCallThin } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-24 flex justify-between gap-10">
      <div className="flex flex-col max-w-[330px]">
        <h2 className="footer-header">Help & Support</h2>
        <ul className="footer-text flex flex-col gap-3">
          <li className="footer-list">
            <TfiLocationPin size={24} color="#3c50e0" />
            <span>685 Market Street,Las Vegas, LA 95820,United States.</span>
          </li>
          <li className="footer-list">
            <PiPhoneCallThin size={24} color="#3c50e0" />
            <Link href="tel:+2348061417226">(+234)8061417226</Link>
          </li>
          <li className="footer-list">
            <IoMailOutline size={24} color="#3c50e0" />
            <Link href="mailto:">example@demo.com</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="footer-header">Account</h2>
        <ul className="footer-text flex flex-col gap-3">
          <li>
            <Link href="">Login / Register</Link>
          </li>
          <li>
            <Link href="">Cart</Link>
          </li>
          <li>
            <Link href="">Wishlist</Link>
          </li>
          <li>
            <Link href="">Shop</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="footer-header">Quick Link</h2>
        <ul className="footer-text flex flex-col gap-3">
          <li>
            <Link href="">Privacy Policy</Link>
          </li>
          <li>
            <Link href="">Refund Policy</Link>
          </li>
          <li>
            <Link href="">Terms of Use</Link>
          </li>
          <li>
            <Link href="">FAQ&apos;s</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="max-w-[330px]">
        <h2 className="footer-header">Download App</h2>
        <ul className="footer-text flex flex-col gap-3">
          <li>
            <Link
              className="flex items-center bg-[#1c274c] rounded-md py-[9px] px-4 gap-2"
              href=""
            >
              <FaApple size={40} color="#fff" />
              <div className="flex flex-col gap-1 text-white">
                <span className="text-xs">Download on the</span>
                <span className="text-base font-medium">Apple Store</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center bg-[#3c50e0] py-[9px] px-4 rounded-md gap-2"
              href=""
            >
              <IoLogoGooglePlaystore size={40} color="#fff" />
              <div className="flex flex-col gap-1 text-white">
                <span className="text-xs">Download on the</span>
                <span className="text-base font-medium">Google Play</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
