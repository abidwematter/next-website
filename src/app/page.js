import ArtificialIntelligence from "@/views/home-pages/ArtificialIntelligence";
import { HomeSetting } from "@/services/shared-fetch-service";



export async function generateMetadata({ params }) {

  const homeSetting = await HomeSetting();

  return {
    title: homeSetting?.[0]?.meta_title_home,
    keywords: homeSetting[0]?.meta_keyword_home,
    description: homeSetting[0]?.meta_description_home,
  }
}


export default function Home() {
  return (

    <ArtificialIntelligence />
  );
}