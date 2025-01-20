import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function StackedCircularFooter() {
  return (
    <footer className="bg-[#111827] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-[#2563eb]/10 p-2 w-20 h-20 relative overflow-hidden">
            <Image
              src="/france.png"
              alt="France" 
              fill
              className="object-cover"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/70">
              <li>
                <Link href="#hero" className="hover:text-[#2563eb] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#2563eb] transition-colors">
                  Journey
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#2563eb] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#2563eb] transition-colors">
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full text-white border-white/20 bg-transparent hover:bg-[#2563eb] hover:text-white">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full text-white border-white/20 bg-transparent hover:bg-[#2563eb] hover:text-white">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full text-white border-white/20 bg-transparent hover:bg-[#2563eb] hover:text-white">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full text-white border-white/20 bg-transparent hover:bg-[#2563eb] hover:text-white">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/50">
              © 2024 Your Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter } 