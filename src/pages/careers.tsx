import { aboutgroup } from '@/assests/About';
import Jobapplication from '@/Components/Career/Jobapplication';
import Jobopening from '@/Components/Career/Jobopening';
import Commonbreacrumb from '@/Components/Common/Commonbreadcrumb'
import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'

const data = {
    cont1: "CAREERS",
    cont2: "",
  };

export default function careers() {
  return (
    <MainLayouts>
    <Commonbreacrumb data={data} image={aboutgroup.src} />
    <Jobopening/>
    <Jobapplication/>
  </MainLayouts>
  )
}
