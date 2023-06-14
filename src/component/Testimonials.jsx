import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Iframe = styled.iframe`
  width: 560px;
  height: 315px;
  border: 0;
`;

const Testimonials = () => {
  return (
    <Section>
      <VideoContainer>
        <Iframe
          src="https://www.youtube.com/embed/DRUO296WCpc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Iframe>
        <Iframe
          src="https://www.youtube.com/embed/bWeRUjHJ94A"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Iframe>
      </VideoContainer>
    </Section>
  );
};

export default Testimonials;
