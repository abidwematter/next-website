import React from 'react';
import { API_CONSTANTS } from '../shared/constent/API.CONSTENT';
import HttpService2 from './http.service'





export const SharedService = async() => {
    let url = API_CONSTANTS.homepage;
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const AboutUs =  async() => {
    let url = API_CONSTANTS.aboutUs;
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const MainMenu =  async() => {
    let url = API_CONSTANTS.menu;
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const FooterMenu = async() => {
    let url = API_CONSTANTS.footer_menu_one
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const FooterTwoMenu = async() => {
    let url = API_CONSTANTS.foote_menu_two
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}


export const FooterThreeMenu = async() => {
    let url = API_CONSTANTS.footer_menu_three
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const FaqData = async() => {
    let url = API_CONSTANTS.faqValue
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const BlogData = async(page) => {
    let url = API_CONSTANTS.blog.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const NewsData = async(page) => {
    let url = API_CONSTANTS.news.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const FaqCategory = async() => {
    let url = API_CONSTANTS.faq_category
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}


export const PODCastData = async(page) => {
    let url = API_CONSTANTS.pod_cast.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const CaseStudyData = async(page) => {
    let url = API_CONSTANTS.casestudy.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const CaseCategory = async() => {
    let url = API_CONSTANTS.casestudy_category
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const HomeTestimonial = async() => {
    let url = API_CONSTANTS.home_testimonial
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const HomeService = async() => {
    let url = API_CONSTANTS.home_sevice
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const Service = async(page) => {
    let url = API_CONSTANTS.service_pagination
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const HomeSucessStory = async() => {
    let url = API_CONSTANTS.home_sucess_story
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const HomeFaq = async() => {
    let url = API_CONSTANTS.home_faq
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const HomeBlog = async() => {
    let url = API_CONSTANTS.home_blog
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const HomeSetting = async() => {
    let url = API_CONSTANTS.home_setting
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const ServiceCategory = async() => {
    let url = API_CONSTANTS.service_category
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const VideoData = async() => {
    let url = API_CONSTANTS.video_data
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}


export const TestimonialVideoData = async(page) => {
    let url = API_CONSTANTS.testimonial_video.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const WinnerVideoData = async(page) => {
    let url = API_CONSTANTS.winners_videos.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const EventVideoData = async(page) => {
    let url = API_CONSTANTS.event_videos.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const EventPhotoData = async(page) => {
    let url = API_CONSTANTS.event_photo.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}


export const WinnerPhotoData = async(page) => {
    let url = API_CONSTANTS.winner_photo.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const InvestorData = async() => {
    let url = API_CONSTANTS.investors
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const UsaData = async(page) => {
    let url = API_CONSTANTS.USA.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const IndiaData = async() => {
    let url = API_CONSTANTS.india
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}
export const AdvisaryData = async(page) => {
    let url = API_CONSTANTS.advisary.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const ManagementData = async(page) => {
    let url = API_CONSTANTS.management.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const PartnerData = async(page) => {
    let url = API_CONSTANTS.Partners.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const WinnerListData = async() => {
    let url = API_CONSTANTS.winnerList
    const menuData = await HttpService2().GET(url);
    return menuData?.data
} 

export const PartnerHomeData = async() => {
    let url = API_CONSTANTS.partners_home
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const ClientData =async(page) => {    
    let url = API_CONSTANTS.clientsApi.replace(
        '1',
        page
    )
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const addContactUs = async(data) => {    
    let url = API_CONSTANTS.contactus
    const menuData = await HttpService2().POST(url,data);
    return menuData?.data
}

export const addNewsLetter = async(data) => {    
    let url = API_CONSTANTS.saveNewsLetter
    const menuData = await HttpService2().POST(url,data);
    return menuData?.data
}
export const addRegistration = async(data) => {    
    let url = API_CONSTANTS.registration
    const menuData = await HttpService2().POST(url,data);
    return menuData?.data
}

export const eventPhotocat = async() => {    
    let url = API_CONSTANTS.eventPhotocat
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const newEventPhoto = async(url) => {    
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}

export const contactAddress = async() => {
    let url = API_CONSTANTS.contactAddress
    const menuData = await HttpService2().GET(url);
    return menuData?.data
}






