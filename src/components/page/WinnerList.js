import React, { useEffect, useState, Fragment } from "react";
import TeamMemberTwo from "../team/TeamMemberTwo";
import BannerFive from "../short-banner/BannerFive";
import NewsLetterForm from "../form/NewsLetterForm";
import {
  IndiaData,
  PartnerData,
  WinnerListData,
} from "../../services/shared-service";
import axios from "axios";
import { IMG_URL } from '../../shared/constent/img';
import TeamModal from '../page/teamModal';
import Head from "next/head";
const WinnerList = (props) => {
  const [data, setData] = useState([]);
  const [financialList, setFinancialList]=useState([])
  const [sizeBYList, setSizeByList]=useState([])
  const [awardCategory,setAwardCategory]=useState([])
  const [newWinner, setNewWinner] = useState({
    financial:'',
    size:"",
    awardcategory:''
  });
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // });
  useEffect(() => {
    async function awardListFn() {
      var financeId = ""
      var sizeId = ""
      var awardId = ""
      try {
        const awrdListApi = await axios.get(`https://we.hucpl.com/wemat/Api/winners?finance_id=${financeId}&size_id=${sizeId}&award_id=${awardId}`)
        setData(awrdListApi.data);
      }
      catch (error) {
        console.log("Something is Wrong -support");
      }
    }
    awardListFn();
  }, []);
  async function onTextFieldChange(e) {
    var finaceYear = document.getElementById('financial').value;
    var sizeId = document.getElementById('size').value;
    var awardId = document.getElementById('awardcategory').value;
    try {
      const awrdListApi = await axios.get(`https://we.hucpl.com/wemat/Api/winners?finance_id=${finaceYear}&size_id=${sizeId}&award_id=${awardId}`)
      setData(awrdListApi.data);
    }
    catch (error) {
      console.log("Something is Wrong -support");
    }
    setNewWinner({
        ...newWinner,
        [e.target.name]: e.target.value
    })
}
  useEffect(() => {
    async function FinancialYear() {
      try {
        const newWinnerListApi = await axios.get(`https://we.hucpl.com/wemat/Api/finacial_year`)
        setFinancialList(newWinnerListApi.data);
      }
      catch (error) {
        console.log("Something is Wrong -support");
      }
    }
    FinancialYear();
  }, []);
  useEffect(() => {
    async function SizeBy() {
      try {
        const newWinnerListApi = await axios.get(`https://we.hucpl.com/wemat/Api/size_category`)
        setSizeByList(newWinnerListApi.data);
      }
      catch (error) {
        console.log("Something is Wrong -support");
      }
    }
    SizeBy();
  }, []);
  useEffect(() => {
    async function CategoryByAward() {
      try {
        const newWinnerListApi = await axios.get(`https://we.hucpl.com/wemat/Api/award_category`)
        setAwardCategory(newWinnerListApi.data);
      }
      catch (error) {
        console.log("Something is Wrong -support");
      }
    }
    CategoryByAward();
  }, []);
  const [modalIsOpen, setIsOpen] = useState(false);
    const [slugValue, setSlugValue] = useState ('')
    let img = IMG_URL;
    //let pageSlug = useParams();
    const openModal = (slug) => {
        setIsOpen(true);
        setSlugValue(slug)
    }
    const closeModal = () => {
        setIsOpen(!modalIsOpen);
    }
  return (
    <div>
      <Head>
        <title>{props?.data?.meta_title}</title>
        <meta name="description" content={props?.data?.meta_description} />
      </Head>
      <div className="fancy-feature-twentyFive position-relative mt-20">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{ __html: props?.data?.page_content }}
          />
        </div>
      </div>
      <div className="container">
               <div className="row ">
                  <div className="col-md-4 col-xs-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>Financial Year</label>
                        <select name='financial' id="financial" className='form-control' onChange={e => onTextFieldChange(e)} style={{height: '60px'}}>
                          <option value="">-Selected By Financial Year-</option>
                        {
                            financialList && financialList.length > 0 ?
                            financialList.map((item,index)=>(
                                <>
                                  <option value={item.finance_id}>{item.finance_name}</option>
                                </>
                            )) :
                            ''
                        }
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <div className="input-group-meta form-group mb-30">
                        <label> Size Category</label>
                        <select name='size' id="size" className='form-control' onChange={e => onTextFieldChange(e)} style={{height: '60px'}}>
                          <option value="">-Selected By Size-</option>
                        {
                            sizeBYList && sizeBYList.length > 0 ?
                            sizeBYList.map((item,index)=>(
                                <>
                                  <option value={item.size_id}>{item.size_name}</option>
                                </>
                            )) :
                            ''
                        }
                        </select>
                      </div>
                    </div>
                   <div className="col-md-4 col-xs-12">
                      <div className="input-group-meta form-group mb-30">
                        <label>Award Category</label>
                        <select name='awardcategory' id="awardcategory" className='form-control' onChange={e => onTextFieldChange(e)} style={{height: '60px'}}>
                          <option value="">-Selected By Category Award-</option>
                        {
                            awardCategory && awardCategory.length > 0 ?
                            awardCategory.map((item,index)=>(
                                <>
                                  <option value={item.award_id}>{item.award_name}</option>
                                </>
                            )) :
                            ''
                        }
                        </select>
                      </div>
                    </div>
                </div>
            </div>
      <div className="team-section-two mt-30 mb-160 lg-mt-60 lg-mb-100">
        <div className="container">
        <Fragment>
            <div className="row">
              
                {data?.map((val, i) => (
                  
                    <div
                        key={i}
                        className="col-xl-3 col-lg-4 col-sm-6"
                        data-aos='fade-up'
                        data-aos-delay='300'>
                        <div className="team-block-one tran3s mt-50 md-mt-30">

                          
                            <div className="img-meta">
                              
                                <img src={`${img}${val?.photo}`} alt="" className="w-100" />
                              </div>
                            <p className="team-info">
                            {/* onClick={() => openModal(val?.slug)} */}
                                <span className="name tran3s">{val?.name}</span>
                                 <span className="name tran3s">{val?.degree}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <TeamModal isOpen={modalIsOpen} onClick={closeModal} slug={slugValue} pageSlug={data} bgColor="bg-three" />
        </Fragment>
          {/*
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <TeamMemberTwo data={data} />
            </div>
            */}
        </div>
      </div>
    </div>
  );
};
export default WinnerList;
