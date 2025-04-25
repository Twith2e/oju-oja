import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

export default function ProductActions() {
  return (
    <div className="flex gap-3 items-center">
      <div className="bg-white p-2 px-3 rounded-md">
        <LuEye />
      </div>
      <button
        type="button"
        className="bg-[#3c50e0] hover:bg-[#1C3FB7] px-5 py-[7px] rounded-md text-white cursor-pointer text-sm font-medium"
      >
        <span className="whitespace-nowrap">Add to Cart</span>
      </button>
      <div className="bg-white p-2 px-3 rounded-md">
        <CiHeart />
      </div>
    </div>
  );
}
