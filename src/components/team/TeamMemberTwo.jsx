import React, { Fragment, useState } from "react";
import { IMG_URL } from "../../shared/constent/img";
import TeamModal from "../page/teamModal";
import { useParams } from "next/navigation";

const TeamMemberTwo = (props) => {
  console.log("hello user");
  console.log(props);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [slugValue, setSlugValue] = useState("");
  let img = IMG_URL;
  let pageSlug = useParams();

  const openModal = (slug) => {
    setIsOpen(true);
    setSlugValue(slug);
  };
  const closeModal = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <Fragment>
      <TeamModal
        isOpen={modalIsOpen}
        onClick={closeModal}
        slug={slugValue}
        pageSlug={pageSlug}
        bgColor="bg-three"
      />

      <div className="row">
        {props?.data?.map((val, i) => (
          <div
            key={i}
            className="col-xl-3 col-lg-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="team-block-one tran3s mt-50 md-mt-30">
              <div className="img-meta">
                <img src={`${img}${val?.photo}`} alt="" className="w-100" />
              </div>

              <button
                onClick={() => openModal(val?.slug)}
                className="team-info"
              >
                {/* <div dangerouslySetInnerHTML={{__html: (val?.detail)}} /> */}
                <span className="name tran3s">{val?.name}</span>
                <span className="name tran3s">{val?.degree}</span>
              </button>
              {/* <button
                                className="menu-search-btn tran3s"
                                type="button" onClick={() => openModal(val?.slug)}><i className="bi bi-search"/></button> */}
            </div>
            {/* /.team-block-one */}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default TeamMemberTwo;
