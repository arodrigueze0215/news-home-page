import React from "react";
interface Props {
  title: string;
  description: string;
}

export const ItemNews = ({ title, description }: Props) => {
  return (
    <li className="grid last:border-none border-b border-white pt-[32px] pb-[36px] cursor-pointer">
      <h3 className="H4 text-white hover:text-mustard">{title}</h3>
      <span className="text text-white pt-[7px]">{description}</span>
    </li>
  );
};
