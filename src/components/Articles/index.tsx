import Article from "./Item";

const ArticleLayout = () => {
  return (
    <section className="grid-layout col-start-2 col-span-10 mt-[64px]">
      <Article
        position={0}
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
        index="01"
        src="/oldpc.jpg"
      />
      <Article
        position={1}
        title="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
        index="02"
        src="/keyboard.jpg"
      />
      <Article
        position={2}
        title="The Growth Gaming"
        description="How the pandemic has sparked fresh opportunities."
        index="03"
        src="/playcontroller.jpg"
      />
    </section>
  );
};

export default ArticleLayout;
