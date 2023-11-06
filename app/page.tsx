import Image from 'next/image'
import WelcomePart from "@/components/WelcomePart";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Clinics from "@/components/Clinics";
import Doctors from "@/components/Doctors";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";

export default function Home() {
  return (
   <>
       <WelcomePart/>
       <AboutUs/>
       <Services/>
       <Clinics/>
       <Doctors/>
       <Reviews/>
       <Blog/>
   </>
  )
}
