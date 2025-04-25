import { CiShoppingTag } from "react-icons/ci";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Categories() {
  return (
    <div className="px-24">
      <span className="text-base flex gap-2 items-center font-medium">
        <CiShoppingTag color="#3c50e0" size={24} />
        Categories
      </span>
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-2xl font-semibold text-[#1C274C]">
          Browse by Category
        </h2>
        <div className="flex gap-3">
          <button
            className="border border-gray-400 p-2 rounded-md"
            type="button"
          >
            <GoChevronLeft size={24} />
          </button>
          <button
            className="border border-gray-400 p-2 rounded-md"
            type="button"
          >
            <GoChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
