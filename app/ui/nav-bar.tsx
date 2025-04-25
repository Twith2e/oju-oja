import BottomHeader from "./bottom-header";
import TopHeader from "./top-header";

export default function NavBar() {
  return (
    <nav className="flex flex-col bg-white">
      <TopHeader />
      <BottomHeader />
    </nav>
  );
}
