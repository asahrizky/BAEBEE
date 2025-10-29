// app/dashboard/layout.tsx
"use client"; // Diperlukan untuk state (sidebar) dan hooks (router)

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";

// Definisikan item menu
const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: ShoppingCart, label: "Orders", href: "/dashboard/order" },
  { icon: Package, label: "Products", href: "/dashboard/products" },
  { icon: Users, label: "Customers", href: "/dashboard/customers" },
  { icon: LineChart, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleLogout = () => {
    // Logika logout (clear token/session)
    router.push("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Komponen Sidebar
  const Sidebar = () => (
    <aside
      className={`hidden md:flex flex-col bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        isSidebarCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          {!isSidebarCollapsed && <span className="text-lg">POS App</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="hidden md:flex"
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <TooltipProvider delayDuration={0}>
          {navItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 ${
                    isSidebarCollapsed ? "justify-center" : ""
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {!isSidebarCollapsed && <span>{item.label}</span>}
                </Link>
              </TooltipTrigger>
              {isSidebarCollapsed && (
                <TooltipContent side="right">
                  <p>{item.label}</p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
      <div className="mt-auto p-4 border-t">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className={`w-full flex items-center gap-3 text-red-500 hover:text-red-600 ${
                  isSidebarCollapsed ? "justify-center" : "justify-start"
                }`}
              >
                <LogOut className="h-5 w-5" />
                {!isSidebarCollapsed && <span>Logout</span>}
              </Button>
            </TooltipTrigger>
            {isSidebarCollapsed && (
              <TooltipContent side="right">
                <p>Logout</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  );

  // Komponen Header
  const Header = () => (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-950 border-b">
      {/* Tombol Sidebar Mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          {/* Konten Sidebar Mobile (mirip dengan desktop) */}
          <nav className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
             <div className="flex items-center h-16 px-4 border-b">
                <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                  <Package className="h-6 w-6" />
                  <span className="text-lg">POS App</span>
                </Link>
              </div>
            <div className="flex-1 overflow-y-auto p-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-auto p-4 border-t">
               <Button
                variant="ghost"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 justify-start text-red-500 hover:text-red-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Spacer untuk menengahkan (atau tambahkan search bar di sini) */}
      <div className="flex-1">
        {/* <Input placeholder="Search..." className="hidden md:block w-64" /> */}
      </div>

      {/* Info User di Pojok Kanan Atas */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>CH</AvatarFallback> {/* Inisial User */}
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Chad</p>
              <p className="text-xs leading-none text-muted-foreground">
                chad@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="text-red-500">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}