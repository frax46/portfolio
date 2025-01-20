import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

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
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white/70 hover:text-[#f97316] transition-colors">Home</a>
            <a href="#" className="text-white/70 hover:text-[#f97316] transition-colors">About</a>
            <a href="#" className="text-white/70 hover:text-[#f97316] transition-colors">Services</a>
            <a href="#" className="text-white/70 hover:text-[#f97316] transition-colors">Projects</a>
            <a href="#" className="text-white/70 hover:text-[#f97316] transition-colors">Contact</a>
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