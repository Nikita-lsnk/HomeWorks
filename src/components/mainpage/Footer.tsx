import React from 'react'
import styled from 'styled-components'
import LogoFoot from '../../image/LogoFoot.png'
import Vk from '../../image/Vk.png'
import TelegramFoot from '../../image/TelegramFoot.png'

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Logo>
          <Img src={LogoFoot} alt="Picture"/>
          <Info>Dempor pede libero dapi useu class venenatis ut bibendum quam ut nibh necm. NonhonPede mollis vel vitae dorpis Sed odio ultrices id, est eu mauris.</Info>
        </Logo>
        <Contact>
          <Subscribe>Подписывайтесь на нас</Subscribe>
          <Social>
            <Img src={Vk} alt="Picture"/>
            <Img src={TelegramFoot} alt="Picture"/>
          </Social>
        </Contact>
      </Wrap>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 160px;
  margin: 0;
  background-color: #2D2D2D;
  color: #ffffff;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: calc( 100% - 270px);
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
`;
const Img = styled.img`
  
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
`;
const Subscribe = styled.span`
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
`;
const Social = styled.div`
  display: flex;
  gap: 35px;
`;
const Info = styled.span`
  display: block;
  width: 430px;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
`;


