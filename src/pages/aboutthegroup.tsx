import { aboutgroup } from '@/assests/About';
import Commonbreacrumb from '@/Components/Common/Commonbreadcrumb';
import MainLayouts from '@/Layouts/MainLayouts';
import React from 'react'

const data = {
    cont1: "COMPANY PROFILE",
    cont2: "",
  };
export default function aboutthegroup() {
  return (
    <MainLayouts>
      <Commonbreacrumb data={data} image={aboutgroup.src}/>
    </MainLayouts>
  )
}
