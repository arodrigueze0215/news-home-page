import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import type { DocumentReference } from "firebase/firestore";

type ArticleType = {
  title: string;
  description: string;
  url: string;
  position: number;
  index: string;
};
type NewsType = {
  title: string;
  description: string;
};

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

interface DataReturnType {
  listArticles: ArticleType[];
  listNews: NewsType[];
}

interface NewHomePageData {
  articles: { id: string }[];
  news: { id: string }[];
  "hero-title": string;
  "hero-description": string;
  "hero-image": string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY as string,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
  databaseURL: process.env.FIREBASE_DATABASE_URL as string,
  projectId: process.env.FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.FIREBASE_APP_ID as string,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID as string,
};

export default class ApiFireStore {
  collectionWebProject: any;

  constructor() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    this.collectionWebProject = collection(db, "web-projects");
  }

  async init() {
    const mainQuery = await getDocs(this.collectionWebProject);
    const data = mainQuery.docs
      .find((doc) => doc.id === "new-home-page")
      ?.data() as NewHomePageData;
    const hero = {
      title: data["hero-title"],
      description: data["hero-description"],
      image: data["hero-image"],
    };
    return { articles: data.articles, news: data.news, ...hero };
  }

  async getArtciles(articles: DocumentReference[]) {
    const articlePromises = articles.map(async ({ id }: DocumentReference) => {
      const articleDocRef = doc(this.collectionWebProject, id);
      const articleDoc = await getDoc(articleDocRef);
      return articleDoc.exists() ? articleDoc.data() : null;
    });
    const listArticles = await Promise.all(articlePromises);

    listArticles.forEach((newsItem, index) => {
      if (!newsItem) return;
      newsItem.position = index;
      newsItem.index = (index + 1).toString().padStart(2, "0");
    });
    return listArticles;
  }

  async getNews(news: DocumentReference[]) {
    const newsPromises = news.map(async ({ id }: DocumentReference) => {
      const newsDocRef = doc(this.collectionWebProject, id);
      const newsDoc = await getDoc(newsDocRef);
      return newsDoc.exists() ? newsDoc.data() : null;
    });
    const listNews = await Promise.all(newsPromises);

    return listNews;
  }
}
