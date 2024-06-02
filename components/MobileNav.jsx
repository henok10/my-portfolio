import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import Nav from "./Header/Nav"
import Logo from "./Header/Logo"
import Socials from "./Socials"
import { AlignJustify } from "lucide-react"


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles={'flex flex-col items-center gap-y-6'}
              linkStyles={'text-2xl'}
            />

          </div>
          <Socials
            iconsStyles={'text-2xl'}
            containerStyles={'flex gap-x-4'} />
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default MobileNav