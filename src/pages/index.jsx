import Nav from "../components/Nav";
import HeroImage from "../components/HeroImage";
import ListNews from "../components/ListNews";
import ArticleLayout from "../components/Articles";
const heroData = {
  title: 'The Bright Future of Web 3.0?',
  description: 'We dive into the next evolution of the web that claims to put the powet of the platforms back into the hands of the people. But is it really fulfilling its promise?',
  image: 'https://res.cloudinary.com/dwlznwenw/image/upload/v1720232277/hero5_iphdey.jpg'
}
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
    src: "https://res.cloudinary.com/dwlznwenw/image/upload/v1720232277/oldpc_ebdarr.jpg",
  },
  {
    position: 1,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    index: "02",
    src: "https://res.cloudinary.com/dwlznwenw/image/upload/v1720232277/playcontroller_gxfdtl.jpg",
  },
  {
    position: 2,
    title: "The Growth Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    index: "03",
    src: "https://res.cloudinary.com/dwlznwenw/image/upload/v1720232277/keyboard_ko3flh.jpg",
  },
];
export default function Home() {
  return (
    <main>
      <Nav />
      <header className="grid-layout">
        <article className="col-span-full xl:col-start-2 xl:col-span-10 grid xl:grid-cols-10 gap-[16px] mt-[48px]">
          <HeroImage {...heroData} />
          <ListNews title="News" list={listNews} />
        </article>
      </header>
      <ArticleLayout list={listArticles}/>
    </main>
  );
}
