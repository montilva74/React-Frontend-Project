import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Video() {

    return (
<Container className='video_home'>
        <Row>
          <iframe
            title="DC Shoes"
            height={627}
            src="https://www.youtube.com/embed/-_gDVOUywMM?start=2&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autohide=1&amp;autoplay=1&amp;loop=1&amp;playlist=-_gDVOUywMM&amp;mute=1&amp;showinfo=0"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </Row>
      </Container>
    )
}

export default Video;