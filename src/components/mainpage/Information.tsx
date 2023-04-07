import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LogoMan from '../../image/LogoMan.png'
import axios from 'axios'
import { Oval } from 'react-loader-spinner';


interface IArticle {
  id: string,
  type: string,
  sectionId: string,
  sectionName:string,
  webPublicationDate:string,
  webTitle:string,
  webUrl:string,
  apiUrl:string,
  isHosted:boolean,
  pillarId:string,
  pillarName:string
}
const src ="https://content.guardianapis.com/search?page=2&q=debate&api-key=test"

const Information = () => {

  const [loading, setLoading] = useState (false);
  const [articles, setArticles] = useState<Array<IArticle>>([]);

  useEffect(() => {
    setLoading(true)
    axios
    .get(src)
    .then(data => {
      setLoading(false)
      setArticles(data.data.response.results);
    })
  }, [])
  

  return (
    <Container>
{
        loading?
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        :
        <Wrap>
        {articles.slice(0, 4).map(article =>{
            return (
              <InfoBlock>
                <MainBlock>
                  <TextInfo>
                    <MainLink href={article.webUrl}>Информация</MainLink>
                    <MainText>
                      <Title>{article.sectionName}</Title>
                      <SubTitle>{article.webTitle}</SubTitle>
                    </MainText>
                  </TextInfo>
                    <InfoData>{article.webPublicationDate}</InfoData>
                </MainBlock>
                <PhotoBlock>
                  <Img src={LogoMan} alt="Picture"/>
                </PhotoBlock>
              </InfoBlock>
            );
          })} 
          
  
        </Wrap>
      }
    </Container>
  )
}

export default Information

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  min-height: 100vh;
  
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc( 100% - 270px);
  flex-wrap: wrap;
  gap: 30px;
`;
const InfoBlock = styled.div`
  display: flex;
  background-color: #2D2D2D;
  max-width: 570px;
  color: #ffffff;
  
`;
const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  justify-content: space-between;
  
`;
const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MainLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  line-height: 13.4px;
  text-transform: uppercase;
  border: 1px solid #25BA00;
  padding: 13px 13px;
  width: fit-content;
`;
const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
`;
const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
const PhotoBlock = styled.div`
  
`;
const Img = styled.img`
  
`;

const InfoData = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 11.48px;
  ::before{
    content: '';
    display: block;
    background-color: #25BA00;
    width: 60px;
    height: 1px;
    margin-bottom: 30px;
  }
`;