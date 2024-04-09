"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Kids", href: "/Kids" },
];

function Navbar() {
  const pathname = usePathname();
  const {handleCartClick} = useShoppingCart()
  return (
    <header className="mb-8 border-b bg-stone-900">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Bei
            <span className="text-primary">-Root</span>
          </h1>
        </Link>
        <nav className="hidden mx-10 gap-12 lg:flex 2xl:ml-16 mr-auto">
          {links.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-white transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x hover:text-primary">
          <Button
            variant={""}
            onClick={() => handleCartClick()}
            className="flex bg-stone-900 flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none "
          >
            <ShoppingBag className="text-white"/>
            <span className="hidden text-xs font-semibold text-white sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
