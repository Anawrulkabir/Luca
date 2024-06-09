import { CircleUser, Menu, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Link } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

const Navbar = () => {
  const { user, logOut } = useAuth()

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-[20]">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
        <Link to="/" className="mx-4">
          <img
            src="https://i.ibb.co/HtZ7XLd/luca-logo.png"
            alt=""
            className="w-12 h-10 mx-5"
          />
        </Link>

        <Link
          to="/home"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          to="/community"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Community
        </Link>
        <Link
          to="/blogs"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Blogs
        </Link>
        <Link
          to="/about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
      </nav>
      <Sheet className="">
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link to="/" className="flex flex-row">
              <img src="https://i.ibb.co/nDWyh6V/red-vespa.png" alt="" />
            </Link>

            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Order
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              About Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search places you love..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] border-purple-300"
            />
          </div>
        </form>

        {/* avatar / join menu */}
        {!user ? (
          <Button asChild size="sm" className=" gap-1">
            <Link to="/join">Join Now</Link>
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="rounded-full  overflow-hidden border border-purple-500">
                <img
                  src={
                    user && user?.photoURL ? (
                      user?.photoURL
                    ) : (
                      <CircleUser className="h-5 w-5" />
                    )
                  }
                  className="h-7 w-7 object-cover "
                />

                <span className="sr-only">Toggle user menu</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {/* profile pop-up dialogue */}

                <Dialog>
                  <DialogTrigger asChild>
                    <button>My Account</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/test-dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button
                  onClick={() => {
                    logOut()
                  }}
                >
                  Logout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}

export default Navbar
