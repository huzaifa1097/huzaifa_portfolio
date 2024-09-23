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
        <span className="text-center xl:text-left">Aspiring Software Developer</span>
        <h1 className="h1 mb-6">
          Hello I'm <br /> <span className="text-accent"> Abu Huzaifa Ahmad</span>
        </h1>
        <p className="mac-w-[500px] mb-9 text-white/80">
        I am a tech enthusisast with a passion for <br/> developing seamless,
         user-friendly applications.<br/>
         I am driven by a commitment to continuous<br/> learning and impactful problem-solving.
         </p>
         {/*button and socials */}
         <div className="flex flex-col xl:flex-row items-center gap-8">
         <a href="/assets2/resume/Abu_Huzaifa_Ahmad_CV.pdf" download>
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
