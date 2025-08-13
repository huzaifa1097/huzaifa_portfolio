import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload} from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      {/**text */}
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-center xl:text-left">Full-Stack Developer (Python & React) | Specializing in AI-Powered Applications & Agentic Systems</span>
        <h1 className="h1 mb-6">
          Hello I'm <br /> <span className="text-accent">Abu Huzaifa Ahmad</span>
        </h1>
        <p className="mac-w-[500px] mb-9 text-white/80">
        I am a versatile Full-Stack Developer with a passion for creating seamless, user-friendly applications. I specialize in integrating advanced AI capabilities into real-world solutions, with proven experience in building agentic systems using Python, LangChain, and React. My commitment to continuous learning and impactful problem-solving drives me to build robust, intelligent software.
         </p>
         {/*button and socials */}
         <div className="flex flex-col xl:flex-row items-center gap-8">
         <a href="/assets2/resume/resume_ahmadhuzaifa.pdf" download>
         <Button 
           variant ="outline"
           className="uppercase flex items-center gap-2 px-3 py-1 text-sm">
          <span>Download CV</span>
          <FiDownload className="text-sm"/>
         </Button>
         </a>
         <div className="mb-8 xl:mb-0">
         <Social containerStyles="flex gap-5"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hov
          hover:bg-accent hover:text-primary hover:transition-all duration-500"
         />
         </div>
         </div>
      </div>
      {/*photo */}
      <div className="classname-1 xl:order-none mb-8 xl:mb-0">
      <Photo/>
      </div>
      </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home
