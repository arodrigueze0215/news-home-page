import React from "react";
type Props = {
  title: string;
};
const ListNews = ({ title }: Props) => {
  return (
    <aside className="col-span-3">
      <div className="w-full pl-[22px] pr-[25px] bg-black">
        <h2 className="title-2  text-mustard pt-[27px]">{title}</h2>
        <div className="grid border-b border-white pt-[32px] pb-[36px]">
          <h4 className="H4 text-white">Hydrogen VS Electric Cars</h4>
          <span className="text text-white pt-[7px]">
            Will hydrogen-fueled cars ever carch up to EVs?
          </span>
        </div>
        <div className="grid border-b border-white pt-[32px] pb-[36px]">
          <h4 className="H4 text-white">
            The Downsides of AI Artistry
          </h4>
          <span className="text text-white pt-[7px]">
            What are the possible adverse effects of on-demand AI image
            generation?
          </span>
        </div>
        <div className="grid pt-[32px] pb-[36px]">
          <h4 className="H4 text-white">Is VC Funding Drying Up?</h4>
          <span className="text text-white pt-[7px]">
            Private funding by VC firms is down 50% YOY. We take a llok at what
            that measn.
          </span>
        </div>
      </div>
    </aside>
  );
};
export default ListNews;
