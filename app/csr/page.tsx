import Acordian from '@/components/CSR/Acordian'
import DesireFoundation from '@/components/CSR/DesireFoundation'
import OurWay from '@/components/CSR/OurWay'
import Vision from '@/components/CSR/Vision'
import Footer from '@/components/Home/Footer'

import React from 'react'

const page = () => {
  return (
    <div className={"mb-10"}>
        <OurWay/>
        <DesireFoundation/>
        <Vision/>
        <Acordian/>

    </div>
  )
}

export default page