import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Video.css'

function Video() {

    return (
<Container>
        <Row>
          <iframe className='video_home'
            title="DC Shoes"
            src="https://www.youtube.com/embed/-_gDVOUywMM?start=2&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autohide=1&amp;autoplay=1&amp;loop=1&amp;playlist=-_gDVOUywMM&amp;mute=1&amp;showinfo=0"
            frameBorder="0"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </Row>
      </Container>
    )
}

export default Video;