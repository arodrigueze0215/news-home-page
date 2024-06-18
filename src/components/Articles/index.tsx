import Article, { ArticleProps } from "./Item";
type ArticleListProps = {
  list: [ArticleProps];
};
const ArticleLayout = ({ list }: ArticleListProps) => {
  return (
    <section className="grid-layout mt-[32px] gap-y-[32px] xl:col-start-2 xl:col-span-10 xl:mt-[64px]">
      {list.map(
        ({ position, title, description, index, src }: ArticleProps) => (
          <Article
            key={position}
            position={position}
            title={title}
            description={description}
            index={index}
            src={src}
          />
        )
      )}
    </section>
  );
};

export default ArticleLayout;
