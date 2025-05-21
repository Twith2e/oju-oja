"use client";
import ShopContextProvider from "@/app/contexts/shop-context";
import ShopSidebar from "@/app/ui/shop/shop-sidebar";
import ToggleSidebarButton from "@/app/ui/shop/toggle-sidebar-button";

export default function ShopSidebarProvider() {
  return (
    <ShopContextProvider>
      <ShopSidebar />
      <ToggleSidebarButton />
    </ShopContextProvider>
  );
}
