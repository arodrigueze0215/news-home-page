import Head from "next/head";
import Nav from "../components/Nav";
import HeroImage from "../components/HeroImage";
import ListNews from "../components/ListNews";
import ArticleLayout from "../components/Articles";
import ApiFireStore from "../api"


export async function getStaticProps() {
  const api = new ApiFireStore();
  const {title, description, image, articles, news} = await api.init();
  const listArticles = await api.getArtciles(articles)
  const listNews = await api.getNews(news);

  const heroData = {
    title,
    description,
    image,
  };
  
  return {
    props: { heroData, listNews, listArticles },
  };
}

export default function Home({ heroData, listNews, listArticles }) {
  return (
    <>
      <Head>
        <title>News homepage</title>
      </Head>
      <main>
        <Nav />
        <header className="grid-layout">
          <article className="col-span-full xl:col-start-2 xl:col-span-10 grid xl:grid-cols-10 gap-[16px] mt-[48px]">
            <HeroImage {...heroData} />
            <ListNews title="News" list={listNews} />
          </article>
        </header>
        <ArticleLayout list={listArticles} />
      </main>
    </>
  );
}
