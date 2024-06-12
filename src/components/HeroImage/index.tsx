import React from "react";
import Image from "next/image";
import Button from "../Button";
const HeroImage = () => {
  return (
    <div className="col-span-7 ">
      <div className="min-h-[334px] relative mr-[43px]">
        <Image src="/hero5.jpg" fill alt="Hero" />
      </div>
      <div className="grid grid-cols-7 gap-x-[16px] pt-[26px]">
        <h1 className="H1 col-span-3 text-black">The Bright Future of Web 3.0?</h1>
        <div className="col-span-4 mr-[43px] px-[20px]">
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
