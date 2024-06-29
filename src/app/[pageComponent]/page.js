
import PageComponent from "@/components/page/pageComponent";
import { HomeSetting } from "@/services/shared-fetch-service";
import { Page } from "@/services/shared-fetch-service";

// export async function generateMetadata({ params }) {

//   const homeSetting = await HomeSetting();
//   const pageData = await Page

//   return {
//     title: pageData[0]?.meta_title,
//     keywords: homeSetting[0]?.meta_keyword_home,
//     description: homeSetting[0]?.meta_description_home,
//   }
// }



export async function generateMetadata({ params }) {

  const homeSetting = await HomeSetting();
  const pageData = await Page

  return {
    title: pageData[0]?.meta_title,
    keywords: homeSetting[0]?.meta_keyword_home,
    description: homeSetting[0]?.meta_description_home,
  }
}



export default function PageComponentView() {
  return <PageComponent />;
}
