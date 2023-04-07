import React, {useState} from 'react'
import styled from 'styled-components'
import "./Statistic.css"
import Arrow from '../../image/Arrow.svg'


const Results = () => {

  const [nav,setNav] = useState (false);


  return (
    <Container>
      <Wrap>
        <MyStat>
          <MainButton onClick={() => setNav(!nav)}>
            Средний результат
          </MainButton>
          <Img src={Arrow} className={nav? "rotate":""}/>
        </MyStat>
        <MainResult className={nav? "active":""}>
          
        </MainResult>
        
      </Wrap>
    </Container>
  )
}

export default Results

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
`;
const Img = styled.img`
  
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: calc( 100% - 270px);
  flex-direction: column;
  color: #2D2D2D;
`;
const MyStat = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid #25BA00;
  border-bottom: 1px solid #25BA00;
  
`;
const MainResult = styled.div`
  display: none;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;
const MainButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  text-transform: uppercase;
  font-size: 30px;
  line-height: 30px;
  text-align: left;
  :hover, :focus{
    color: #25BA00;
  }
`;