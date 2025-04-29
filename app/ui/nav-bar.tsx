import BottomHeader from "./home/bottom-header";
import TopHeader from "./home/top-header";

export default function NavBar() {
  return (
    <nav className="flex flex-col bg-white">
      <TopHeader />
      <BottomHeader />
    </nav>
  );
}
