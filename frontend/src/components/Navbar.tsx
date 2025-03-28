import {
  ChevronDownIcon,
  Heart,
  Menu,
  Search,
  User,
  LayoutDashboard,
  Package,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import { useId } from "react";
import { Link } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import avatarImg from "@/assets/avatar.png";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/order", icon: Package },
  { name: "Cart Page", href: "/cart", icon: ShoppingCart },
  { name: "Check Out", href: "/checkout", icon: CreditCard },
];

const Navbar = () => {
  const inputId = useId();
  const currentUser = true;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4 ">
          <Link to="/">
            <Menu className="size-6" />
          </Link>
          <div className="relative">
            <Input
              id={inputId}
              className="peer ps-9"
              placeholder="Search here"
              type="text"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <Search size={16} aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div className="flex items-center">
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 hover:bg-transparent"
                  >
                    <Avatar className="flex items-center justify-center">
                      <AvatarImage
                        src={avatarImg}
                        alt="Profile image"
                        className={`size-7 rounded-full ${
                          currentUser ? "ring-2 ring-blue-500" : ""
                        }`}
                      />
                      <AvatarFallback>KK</AvatarFallback>
                    </Avatar>
                    <ChevronDownIcon
                      size={16}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    {navigation.map(({ name, href, icon: Icon }) => (
                      <DropdownMenuItem
                        key={name}
                        className="cursor-pointer"
                        asChild
                      >
                        <Link to={href}>
                          <Icon className="w-5 h-5" />
                          {name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <User className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <Heart className="size-6" />
          </button>
          <Button asChild>
            <Link to="/cart">
              <ShoppingCart className="size-6" />
              <span className="text-sm font-semibold sm:ml-1">0</span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
