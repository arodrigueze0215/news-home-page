import Image from "next/image";
import Nav from "../components/Nav";
import HeroImage from "../components/HeroImage";
import ListNews from "../components/ListNews";
import ArticleLayout from "../components/Articles";
export default function Home() {
  return (
    <main>
      <Nav />
      <header className="grid-layout">
        <article className="col-start-2 col-span-10 grid grid-cols-10 gap-[16px] mt-[48px]">
          <HeroImage />
          <ListNews title="News" />
        </article>
      </header>
      <ArticleLayout/>
    </main>
  );
}
