import { CiSearch } from "react-icons/ci";
import SearchDropdown from "./search-dropdown";

export default function SearchBar() {
  return (
    <div className="border border-gray-300 flex items-center justify-between rounded-md">
      <SearchDropdown />
      <span className="border-r-1 border-r-gray-200 h-6"></span>
      <div className="flex items-center py-2.5 pr-3 flex-1">
        <input
          className="outline-none border-none w-full bg-transparent pl-2.5"
          placeholder="I am shopping for..."
          type="text"
        />
        <CiSearch size={24} />
      </div>
    </div>
  );
}
