import React, { Fragment, useEffect, useState } from "react";
import TeamDetailsOne from "../team/TeamDetailsOne";
import HttpService from "../../services/http.service";
import { API_CONSTANTS } from "../../shared/constent/API.CONSTENT";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { IMG_URL } from "../../shared/constent/img";

const TeamModal = (props) => {
  const { isOpen, onClick, slug, pageSlug } = props;
  const [pageData, setPageData] = useState([]);
  let img = IMG_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (slug) {
      getPageSlugData();
    }
  }, [slug]);

  const getPageSlugData = async () => {
    let url = API_CONSTANTS.teamDetails.replace("abhinandan-singh", slug);
    const menuData = await HttpService().GET(url);
    setPageData(menuData?.data);
  };

  return (
    <Fragment>
      <Modal show={isOpen} ariaHideApp={false} onRequestClose={onClick}>
        <Modal.Header
          closeButton
          onClick={onClick}
          style={{ borderBottom: "none" }}
        ></Modal.Header>
        <Modal.Body>
          {pageSlug?.slug == "new-winner-list" ? (
            <>
              {pageData.map((val, i) => (
                <div key={i} className="main-bg">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="img-meta-winner-list">
                        <img
                          src={`${img}${val.photo}`}
                          alt=""
                          className="img-logo-winner"
                        />
                        <div className="social-data">
                          <ul className="social-icon style-none d-flex pt-15">
                            <li>
                              <a href={val.facebook}>
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href={val.twitter}>
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href={val.website}>
                                <i className="fab fa-dribbble" />
                              </a>
                            </li>
                            <li>
                              <a href={val.email}>
                                <i className="far fa-envelope" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper" style={{ fontSize: "15px" }}>
                    <div className="position"> {val.degree}</div>
                    <div dangerouslySetInnerHTML={{ __html: val.detail }} />
                  </div>
                  {/* /.text-wrapper */}
                </div>
              ))}
            </>
          ) : (
            <>
              {pageData.map((val, i) => (
                <div key={i} className="main-bg d-lg-flex align-items-center">
                  <div className="img-meta">
                    <img
                      src={`${img}${val.photo}`}
                      alt=""
                      className="img-logo"
                    />
                    <div className="social-data">
                      <ul className="social-icon style-none d-flex pt-15">
                        <li>
                          <a href={val.facebook}>
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href={val.twitter}>
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href={val.linkedin}>
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href={val.email}>
                            <i className="far fa-envelope" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-wrapper dddd">
                    <div className="position">
                      <a href={val.linkedin}>{val.degree}</a>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: val.detail }} />
                  </div>
                  {/* /.text-wrapper */}
                </div>
              ))}
            </>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default TeamModal;
