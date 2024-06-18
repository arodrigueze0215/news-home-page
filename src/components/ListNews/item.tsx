import React from "react";
interface Props {
  title: string;
  description: string;
}

export const ItemNews = ({ title, description }: Props) => {
  return (
    <li className="grid last:border-none border-b border-white pt-[32px] pb-[36px]">
      <h4 className="H4 text-white">{title}</h4>
      <span className="text text-white pt-[7px]">{description}</span>
    </li>
  );
};
