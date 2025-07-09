import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  return (
    <div className="border-b">
      <nav className="flex items-center justify-between p-4 h-16">
        <h4 className="font-semibold">Dashboard</h4>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>Umar</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
