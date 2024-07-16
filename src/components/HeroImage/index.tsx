import React from "react";
import Image from "next/image";
import Button from "../Button";

type Props = {
  title?: string;
  description?: string
  image: string;
}
const HeroImage = ({ title, description, image }:Props) => {
  
  return (
    <div className="xl:col-span-7 col-span-full">
      <div className="xl:min-h-[334px] relative xl:mr-[43px] aspect-square xl:aspect-video">
        <Image src={image} layout="fill" alt="Hero" className="xl:object-fill object-cover" sizes="(max-width: 768px) 50vw, 100vw"/>
      </div>
      <div className="grid xl:grid-cols-7 grid-cols-4 gap-x-[16px] pt-[26px]">
        <h1 className="H1 xl:col-span-3 col-span-full text-black">{title}</h1>
        <div className="col-span-full xl:col-span-4 xl:mr-[43px] xl:px-[20px]">
          <p className="text">
            {description}
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
