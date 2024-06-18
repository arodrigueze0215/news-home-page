import React from "react";
import Image from "next/image";
import Button from "../Button";
const HeroImage = () => {
  return (
    <div className="xl:col-span-7 col-span-full">
      <div className="xl:min-h-[334px] relative xl:mr-[43px] aspect-square xl:aspect-video">
        <Image src="/hero5.jpg" layout="fill" alt="Hero" className="xl:object-fill object-cover"/>
      </div>
      <div className="grid xl:grid-cols-7 grid-cols-4 gap-x-[16px] pt-[26px]">
        <h1 className="H1 xl:col-span-3 col-span-full text-black">The Bright Future of Web 3.0?</h1>
        <div className="col-span-full xl:col-span-4 xl:mr-[43px] xl:px-[20px]">
          <p className="text">
            We dive into the next evolution of the web that claims to put the
            powet of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="mt-[36px]">
            <Button hoverInvert>READ MORE</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroImage;
