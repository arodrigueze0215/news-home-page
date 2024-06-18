import React from "react";
import { ItemNews } from "./item";
type Props = {
  title: string;
  list: [{title: string, description:string}]
};
const ListNews = ({ title, list }: Props) => {
  return (
    <aside className="xl:col-span-3 col-span-full -mx-[16px] xl:mx-[0px]">
      <div className="w-full xl:pl-[22px] xl:pr-[25px] px-[16px]  bg-black">
        <h2 className="H2 text-mustard pt-[27px]">{title}</h2>
        <ul>
          {list.map(({ title, description}) => <ItemNews key={title} title={title} description={description}/>)}
        </ul>        
      </div>
    </aside>
  );
};
export default ListNews;
