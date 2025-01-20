import { SparklesCore } from "@/components/ui/sparkles";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { TimelineDemo } from "@/components/ui/timeline.demo";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section id="hero" className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#2563eb"
            speed={1}
          />
        </div>
        <BackgroundGradientAnimation
          gradientBackgroundStart="transparent"
          gradientBackgroundEnd="transparent"
          firstColor="37, 99, 235"
          secondColor="249, 115, 22"
          thirdColor="37, 99, 235"
          fourthColor="249, 115, 22"
          fifthColor="37, 99, 235"
          pointerColor="249, 115, 22"
          size="150%"
          blendingValue="screen"
          className="relative z-10 h-full flex items-center justify-center"
          containerClassName="!absolute inset-0"
        >
          <div className="text-center relative z-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#111827] font-outfit font-bold">
              France
              <br />
              Annobil
            </h1>
            <p className="text-lg md:text-xl mt-6 text-[#111827]/80 font-inter max-w-2xl mx-auto">
              I&apos;m a tech enthusiast with a passion for AI, cryptocurrency, gaming, and the evolving world of robotics.
            </p>
          </div>
        </BackgroundGradientAnimation>
      </section>

      {/* Timeline Section */}
      <section id="projects" className="min-h-screen bg-white">
        <TimelineDemo />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-[#111827] relative">
        {/* Background Slider */}
        <div className="absolute inset-0 opacity-10 flex">
          <InfiniteSlider duration={50} direction="vertical" className="w-1/3">
            <div className="flex flex-col gap-4">
              <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995" alt="AI" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0" alt="Blockchain" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1542751371-adc38448a05e" alt="Gaming" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" alt="Robotics" width={300} height={300} className="object-cover rounded-xl" />
            </div>
          </InfiniteSlider>
          <InfiniteSlider duration={50} direction="vertical" reverse className="w-1/3">
            <div className="flex flex-col gap-4">
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Code" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1644088379091-d574269d422f" alt="Web3" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1626387346567-68d0c49af34a" alt="VR" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Innovation" width={300} height={300} className="object-cover rounded-xl" />
            </div>
          </InfiniteSlider>
          <InfiniteSlider duration={50} direction="vertical" className="w-1/3">
            <div className="flex flex-col gap-4">
              <Image src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d" alt="Crypto" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1535378917042-10a22c95931a" alt="Future" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1614066882476-d682f3d3b07b" alt="Metaverse" width={300} height={300} className="object-cover rounded-xl" />
              <Image src="https://images.unsplash.com/photo-1436891620584-47fd0e565afb" alt="Puzzle" width={300} height={300} className="object-cover rounded-xl" />
            </div>
          </InfiniteSlider>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white pt-16 mb-12 max-w-3xl">
            About Me
          </h2>
          <TextRevealByWord 
            text="I&apos;m a tech enthusiast with a passion for AI, cryptocurrency, gaming, and the evolving world of robotics. I thrive on innovation, problem-solving, and exploring new ideas that challenge the way we think. Beyond technology, I enjoy anime, thought-provoking mysteries, and puzzles that keep my mind engaged. I believe in the power of creativity and forward-thinking solutions, always seeking ways to push boundaries while maintaining a balanced, enjoyable life. Whether it&apos;s building cutting-edge solutions, discussing the future of decentralized systems, or simply exploring the next big idea, I&apos;m always excited to dive in."
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-[50vh] bg-white py-20">
        <div className="container mx-auto px-6 mb-10">
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-[#111827] mb-12 max-w-3xl">
            Skills & Technologies
          </h2>
        </div>
        <InfiniteSlider duration={30} className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#2563eb]">HTML5</p>
            </div>
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#2563eb]">CSS3</p>
            </div>
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#2563eb]">JavaScript</p>
            </div>
          </div>
        </InfiniteSlider>
        <InfiniteSlider duration={30} reverse className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#f97316]">MySQL</p>
            </div>
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#f97316]">jQuery</p>
            </div>
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#f97316]">Bootstrap</p>
            </div>
          </div>
        </InfiniteSlider>
        <InfiniteSlider duration={30}>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#2563eb]">WordPress</p>
            </div>
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#2563eb]">React</p>
            </div>
            <div className="flex items-center justify-center bg-[#111827] p-8 rounded-xl min-w-60">
              <p className="text-2xl font-outfit font-bold text-[#2563eb]">Next.js</p>
            </div>
          </div>
        </InfiniteSlider>
      </section>

      <StackedCircularFooter />
    </main>
  );
}
