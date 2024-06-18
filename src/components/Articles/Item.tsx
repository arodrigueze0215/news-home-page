import Image from "next/image";

export type ArticleProps = {
  title: string;
  description: string;
  index: string;
  src: string;
  position: number;
};

const Article = ({ title, description, index, src, position }: ArticleProps) => {
  const baseClasses = 'grid gap-[16px]'; // Extract common grid classes for reuse
  const gridLayouts = [
    'col-span-full grid-cols-4 xl:grid-cols-3 xl:col-start-2 xl:col-span-3', // Consistent positioning for 0
    'col-span-full grid-cols-4 pl-[px] xl:col-span-4 xl:ml-[20px]', // Positioning for 1
    'col-span-full grid-cols-4 xl:grid-cols-3 xl:col-span-3', // Consistent positioning for 2
  ];

  const gridClass = `${baseClasses} ${gridLayouts[position]}`

  return (
    <article className={gridClass}>
      <div className="relative col-span-1 aspect-[0.78]">
        <Image src={src} alt={title} fill className="aspect-[0.78]" />
      </div>
      <div className="col-span-3 xl:col-span-2">
        <h3 className="H3 text-gray-light">{index}</h3>
        <h2 className="H4 text-black pt-[14px] pb-[12px]">{title}</h2>
        <span className="text">{description}</span>
      </div>
    </article>
  );
};

export default Article;

