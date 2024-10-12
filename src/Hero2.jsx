
import React from 'react';
import pic1 from "./assets/sheets.png"
import pic2 from "./assets/excel.png"
import pic3 from "./assets/app.png"
import {Chip} from "@nextui-org/react";
import { Carousel } from 'antd';
const contentStyle = {
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function Hero2() {
  return (
    <div className="dark py-14 sm:py-12 ">
      <div className="mx-auto max-w-2xl px-1 lg:max-w-4xl lg:px-42 ">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600 ">ALL IN ONE</h2>
        <p className="mx-auto mt-2 mb-10  text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl ">
          Everything you need to manage your packages.
        </p>
        <Carousel autoplaySpeed={3000}  draggable={true} arrows autoplay>
    <div>

    <Chip color="primary" variant="shadow" className=" mb-6">Track all your packages in Excel</Chip>
    <img src={pic2} alt="Sheets" style={{ width: '100%',  height: 'auto'}} />
    </div>
    <div>
    <Chip color="primary" variant="shadow" className=" mb-6">Track all your packages in Google Sheets</Chip>
    <img src={pic1} alt="Sheets" style={{ width: '100%', height: 'auto' }} />
    </div>
    <div>
    <Chip color="primary" variant="shadow" className=" mb-6">Track all your packages in App</Chip>
    <img src={pic3} alt="Sheets" style={{ width: '100%', height: 'auto' }} />
    </div>
 
  </Carousel>
      </div>
    </div>
  )
}
