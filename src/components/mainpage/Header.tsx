import React from 'react'
import styled from 'styled-components'
import Vk from '../../image/Vk.png'
import Telegram from '../../image/Telegram.png'
import Phone from '../../image/Phone.png'
import Mail from '../../image/Mail.png'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <Wrap>
        <InfoTop>
          <Tariff>
            <Social>
              <Img src={Vk} alt="Picture"/>
              <Img src={Telegram} alt="Picture"/>
            </Social>
            <InfoTariff>
              <MainText>
                <Title>Крайняя оплата:</Title>
                <SubTitle>29.03.2022</SubTitle>
              </MainText>            
              <MainText>
                <Title>Оплачено на:</Title>
                <SubTitle>месяц</SubTitle>
              </MainText>
              <MainText>
                <Title>Абонемент:</Title>
                <SubTitle>базовый</SubTitle>
              </MainText>
            </InfoTariff>
          </Tariff>
          <Contact>
            <InfoPhone>
              <Img src={Phone} alt="Picture"/>
              <Connect href='tel:+89186459099'>+8 918 645 90 99</Connect>
            </InfoPhone>
            <InfoMail>
              <Img src={Mail} alt="Picture"/>
              <Connect href="mailto:footme@gmail.com">footme@gmail.com</Connect>
            </InfoMail>
          </Contact>
        </InfoTop>
        <InfoDown>
          <LogoBlock>
            <Img src={logo} alt="Picture"/>
          </LogoBlock>
          <Navigation>
            <MainNav to="/">Главная</MainNav>
            <MainNav to="/information">Информация</MainNav>
            <MainNav to="/">Расписание</MainNav>
            <MainNav to="/">Достижения</MainNav>
          </Navigation>
          <Login>
            <LogEnter>Войти</LogEnter>
            <MainButton>Зарегистрироваться</MainButton>
          </Login>
        </InfoDown>
      </Wrap>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: calc( 100% - 270px);
  flex-direction: column;
`;
const InfoTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2D2D2D;
  padding: 20px 0;
`;
const InfoDown = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 justify-content: space-between;
 min-height: 80px;
`;
const Tariff = styled.div`
  display: flex;
  gap: 20px;
`;
const Contact = styled.div`
  display: flex;
  gap: 37px;
`;
const InfoPhone = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const InfoMail = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Connect = styled.a`
  text-decoration: none;
  color: #2D2D2D;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
`;
const Social = styled.div`
  display: flex;
  gap: 20px;
`;
const Img = styled.img`
  
`;
const InfoTariff = styled.div`
  display: flex;
  gap: 20px;
`;
const MainText = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  ::before{
    content: '';
    height: 24px;
    width: 1px;
    background: #2D2D2D;
  }
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: #2D2D2D;

`;
const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: #2D2D2D;
`;
const LogoBlock = styled.div`

`;
const Navigation = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;
const MainNav = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 13.4px;
  padding-bottom: 4px;
  color:#2D2D2D;
  text-transform: uppercase;
  :hover, :focus{
    border-bottom: 1px solid #25BA00;  
  } 
`;
const Login = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const LogEnter = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 13.4px;
  color:#2D2D2D;
`;
const MainButton = styled.button`
  color: #ffffff;
  background-color: #25BA00;
  padding: 19px 12px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 13.4px;
`;

