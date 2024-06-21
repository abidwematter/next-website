import React, { Fragment } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const ModalVideos = (props) => {
    const { isOpen, onClick, videoData } = props;
    return (
        <Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoData} onClose={onClick} />
        </Fragment>
    )
}

export default ModalVideos