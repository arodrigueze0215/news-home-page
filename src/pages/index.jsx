import Image from "next/image";
import Nav from "../components/Nav";
import HeroImage from "../components/HeroImage";
import ListNews from "../components/ListNews";
import ArticleLayout from "../components/Articles";
const listNews = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever carch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a llok at what that measn.",
  },
];
const listArticles = [
  {
    position: 0,
    title: "Reviving Retro PCs",
    description: "Will hydrogen-fueled cars ever carch up to EVs?",
    index: "01",
    src: "/oldpc.jpg",
  },
  {
    position: 1,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    index: "02",
    src: "/keyboard.jpg",
  },
  {
    position: 2,
    title: "The Growth Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    index: "03",
    src: "/playcontroller.jpg",
  },
];
export default function Home() {
  return (
    <main>
      <Nav />
      <header className="grid-layout">
        <article className="col-span-full xl:col-start-2 xl:col-span-10 grid xl:grid-cols-10 gap-[16px] mt-[48px]">
          <HeroImage />
          <ListNews title="News" list={listNews} />
        </article>
      </header>
      <ArticleLayout list={listArticles}/>
    </main>
  );
}
