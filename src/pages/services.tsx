import { aboutgroup } from '@/assests/About'
import Commonbreacrumb from '@/Components/Common/Commonbreadcrumb'
import Cardsection from '@/Components/Service/Cardsection'
import MainLayouts from '@/Layouts/MainLayouts'
import React from 'react'

const data={
    cont1:"OUR SERVICES",
    
  }

export default function services() {
  return (
    <MainLayouts>
    <Commonbreacrumb data={data} image={aboutgroup.src}/>
   <Cardsection/>
</MainLayouts>
  )
}
