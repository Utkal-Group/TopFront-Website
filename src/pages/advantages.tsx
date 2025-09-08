import { aboutgroup } from '@/assests/About'
import { advantage } from '@/assests/Advantages';
import Commonbreacrumb from '@/Components/Common/Commonbreadcrumb'
import Advantages from '@/Components/Topfront Advantages/Advantages';
import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'

const data = {
    cont1: "TOPFRONT ADVANTAGE",
   
  };
export default function advantages() {
  return (
    <MainLayouts>
    <Commonbreacrumb data={data} image={advantage.src} />
    <Advantages/>
  </MainLayouts>
  )
}
