import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  padding: 190px;
  align-items: center;
  height: 100vh;

  @media only screen and (max-width: 768px){
    width: 100%;
    align-items: center;
    scroll-snap-align: center;
    justify-content: space-between;
    padding: 1px;
    gap: 10px;
  }

  

`;

const MapContainer = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: flex;

  
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;

  
  
`;

const Contacts = () => {
  return (
    <Section id="Contacts">
      <MapContainer>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15562.890808258979!2d78.7212153173828!3d12.796503000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad08e25f290891%3A0x32befe4b9c32a741!2sShoe%20Style!5e0!3m2!1sen!2sin!4v1686677309044!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </MapContainer>
      <MapContainer>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.612580403971!2d78.70173148715817!3d12.784798499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad08e6ecab5bf1%3A0x69aac50807e4a63e!2sShoe%20Style!5e0!3m2!1sen!2sin!4v1686679185037!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
        
      </MapContainer>
    </Section>
  );
};

export default Contacts;
