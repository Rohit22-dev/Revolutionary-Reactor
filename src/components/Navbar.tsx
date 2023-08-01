"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import logo from "../../public/cart.png";
import { Search, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ModeToggle from "./ModeToggle";
import { UserContext } from "@/app/page";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Electronics",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Jewelery",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Men's clothing",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Women's clothing",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

export default function NavigationMenuDemo() {
  const [searchInput, setSearchInput] = React.useState("");
  const context = React.useContext(UserContext);

  const handleSearch = () => {};

  return (
    <div className="justify-around flex py-2 items-center">
      <div className="flex items-center gap-4">
        <Image alt="logo" src={logo} width={32} />
        <h1>Reactor</h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Category</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    onClick={() => context?.setCategory(component.title)}
                    // href={component.href}
                  >
                    {/* {component.description} */}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-2 items-center">
        <div className="flex items-center rounded-full bg-muted px-2 py-1">
          <input
            type="text"
            value={searchInput}
            placeholder="Search Products"
            className="placeholder:text-sm bg-transparent outline-none "
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Search size={20} className="text-gray-400" onClick={handleSearch} />
        </div>
        <ShoppingCart />
        <ModeToggle />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
