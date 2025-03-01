import { TimelineDemo } from "@/components/ui/timeline.demo";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - Simplified and Modernized */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center px-4 md:px-10 overflow-hidden">
        <BackgroundGradientAnimation
          gradientBackgroundStart="#ffffff"
          gradientBackgroundEnd="#f8fafc"
          firstColor="37, 99, 235"
          secondColor="249, 115, 22"
          thirdColor="37, 99, 235"
          fourthColor="236, 72, 153"
          fifthColor="37, 99, 235"
          pointerColor="249, 115, 22"
          size="80%"
          blendingValue="hard-light"
          className="absolute inset-0 z-0"
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-block p-2 bg-gray-50 rounded-full border border-gray-200 shadow-sm">
            <p className="text-gray-600 font-medium text-lg">Software Developer & Tech Enthusiast</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tight mb-8">
            France<br/>Annobil
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            I'm passionate about building elegant solutions to complex problems. With expertise in web development and a keen interest in emerging technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-xl py-6 px-8">View Projects</Button>
            <Button className="bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-100 text-xl py-6 px-8">Contact Me</Button>
          </div>
        </div>
      </section>

      {/* Professional Journey - Keeping this section as requested */}
      <section id="projects" className="min-h-screen">
        <TimelineDemo />
      </section>

      {/* Skills Section - Redesigned with bigger text and cleaner layout */}
      <section id="skills" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-16 tracking-tight">
            My Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-6">Frontend Development</h3>
              <p className="text-xl text-gray-700 mb-6">Creating beautiful, responsive interfaces with modern technologies.</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-lg px-4 py-2 bg-white rounded-full text-blue-600 font-medium shadow-sm">React</span>
                <span className="text-lg px-4 py-2 bg-white rounded-full text-blue-600 font-medium shadow-sm">Next.js</span>
                <span className="text-lg px-4 py-2 bg-white rounded-full text-blue-600 font-medium shadow-sm">HTML5/CSS3</span>
              </div>
            </div>
            
            {/* Skill Card 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 shadow-lg">
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Backend Systems</h3>
              <p className="text-xl text-gray-700 mb-6">Building robust and scalable server-side applications.</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-lg px-4 py-2 bg-white rounded-full text-orange-500 font-medium shadow-sm">PHP</span>
                <span className="text-lg px-4 py-2 bg-white rounded-full text-orange-500 font-medium shadow-sm">MySQL</span>
                <span className="text-lg px-4 py-2 bg-white rounded-full text-orange-500 font-medium shadow-sm">Laravel</span>
              </div>
            </div>
            
            {/* Skill Card 3 */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 shadow-lg">
              <h3 className="text-3xl font-bold text-pink-600 mb-6">Emerging Tech</h3>
              <p className="text-xl text-gray-700 mb-6">Exploring and implementing cutting-edge technologies.</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-lg px-4 py-2 bg-white rounded-full text-pink-600 font-medium shadow-sm">AI</span>
                <span className="text-lg px-4 py-2 bg-white rounded-full text-pink-600 font-medium shadow-sm">Blockchain</span>
                <span className="text-lg px-4 py-2 bg-white rounded-full text-pink-600 font-medium shadow-sm">Web3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - New, clean design */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Let's Work<br />Together
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
                I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to connect.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-xl py-6 px-8">Get In Touch</Button>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-xl text-blue-600">hello@franceannobil.com</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-xl text-gray-700">London, United Kingdom</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Social</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-2xl font-bold mb-4 md:mb-0">France Annobil</p>
            <p className="text-lg text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
