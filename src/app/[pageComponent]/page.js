
import PageComponent from "@/components/page/pageComponent";
import { HomeSetting } from "@/services/shared-fetch-service";
import { API_CONSTANTS } from "../../shared/constent/API.CONSTENT";
import HttpFetchService from "@/services/http-fetch-service";


export async function generateMetadata({ params }) {


  let url = API_CONSTANTS.page.replace("abc", params.pageComponent);
  const pageData = await HttpFetchService().GET(url);
  console.log(pageData[0], 'pageData 01/7')

  const homeSetting = await HomeSetting();


  return {
    title: pageData[0]?.meta_title,
    keywords: pageData[0] ?.meta_keyword_home,
    description: pageData[0]?.meta_description_home,
  }
}



export default function PageComponentView() {
  return <PageComponent />;
}
