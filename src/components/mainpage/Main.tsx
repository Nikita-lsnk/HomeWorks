import React from 'react'
import styled from 'styled-components'
import MainPicture from '../../image/MainPicture.png'
import Statistic from './Statistic'
import Results from './Results'

const Main = () => {
  return (
    <Container>
      <Wrap>
        <InfoBlock>
          <About>
            <MainName>Макар бондарев</MainName>
            <MainText>
              <Title>Позиция:</Title>
              <SubTitle>Нападающий</SubTitle>
            </MainText>
            <MainText>
              <Title>Возраст:</Title>
              <SubTitle>29.01.2005</SubTitle>
            </MainText>
            <MainText>
              <Title>Нога:</Title>
              <SubTitle>быстрая</SubTitle>
            </MainText>
            <MainText>
              <Title>Команда:</Title>
              <SubTitle>FC Спартак</SubTitle>
            </MainText>
          </About>
          <MainPic>
            <Img src={MainPicture} alt="Picture"/>
          </MainPic>
        </InfoBlock>
        <InfoDate>
          <Statistic/>
          <Results/>
        </InfoDate>  
      </Wrap>
    </Container>
  )
}

export default Main

const Container = styled.div`
  display: flex; 
  align-items: center;
  width: 100%;
  margin: 0;
  color: #2d2d2d;
  min-height: 100vh;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;
const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 550px;
  width: calc( 100% - 188px);
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 320px;
  gap: 30px;
  border-left: 1px solid #25BA00;
  padding-left: 40px;
`;
const MainName = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  line-height: 50px;
  text-transform: uppercase;
`;
const MainText = styled.div`
  display: flex;
  gap: 10px;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 19.4px;

`;
const SubTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 19.4px;
  text-transform: uppercase;
`;
const MainPic = styled.div`
  padding-right: 40px;
`;
const Img = styled.img`
  border-radius: 50%;
  border: 20px solid #25BA00;
`;
const InfoDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px;
`;
