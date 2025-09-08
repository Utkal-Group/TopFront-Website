
import { aboutgroup } from "@/assests/About";
import About from "@/Components/About/About";
import OurTeam from "@/Components/About/OurTeam";
import Commonbreacrumb from "@/Components/Common/Commonbreadcrumb";
import MainLayouts from "@/Layouts/MainLayouts";
import React from "react";
const data = {
  cont1: "ABOUT US",
  cont2: "",
};
export default function aboutus() {
  return (
    <MainLayouts>
<Commonbreacrumb data={data} image={aboutgroup.src}/>
     <About/>
     <OurTeam/>
    </MainLayouts>
  );
}
