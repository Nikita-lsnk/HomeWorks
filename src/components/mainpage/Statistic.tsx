import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Chart} from "react-google-charts"
import Arrow from '../../image/Arrow.svg'
import "./Statistic.css"


function getRandomInt() {
  return Math.round(Math.random() * (40 - 1)) + 1;
};

const pow: number[] =[];
for (let i = 0; i < 4; i++ ) {
  const element = getRandomInt();
  pow.push(element)
};
pow.sort((a, b) => a - b);

export const options = {
  legend: 'none',
  isStacked: true,
  height: 400,
  width: 600,
  colors: ['#25BA00'],
  pointSize: 5,
  areaOpacity: 0.1,
};


const Statistic = () => {

  const [data, setData] = useState ([
    ["", ""],
    ['8 ноября 2022', pow[0]],
    ["10 ноября 2022", pow[1]],
    ["12 ноября 2022", pow[2]],
    ["14 ноября 2022", pow[3]],
  ] );

  const [nav,setNav] = useState (false);

  return (

    <Container>
      <Wrap>
        <MyStat>
          <MainButton onClick={() => setNav(!nav)}>
            Моя статистика
          </MainButton>
          <Img src={Arrow} className={nav? "rotate":""}/>
        </MyStat>
        {nav && <MainResult>
          <ResultItem>
            <Title>Удар</Title>
            <Chart
              chartType="AreaChart"
              data={data}
              width="600px"
              height="400px"
              options={options}
              legendToggle
            />
          </ResultItem>
          <ResultItem>
            <Title>Скорость</Title>
            <Chart
              chartType="AreaChart"
              data={data}
              width="100%"
              height="400px"
              options={options}
              legendToggle
            />
          </ResultItem>
          <ResultItem>
            <Title>Реакция</Title>
            <Chart
              chartType="AreaChart"
              data={data}
              width="100%"
              height="400px"
              options={options}
              legendToggle
            />
          </ResultItem>
          <ResultItem>
            <Title>Прыжок</Title>
            <Chart
              chartType="AreaChart"
              data={data}
              width="100%"
              height="400px"
              options={options}
              legendToggle
            />
          </ResultItem>
          <ResultItem>
            <Title>Точность удара (%)</Title>
            <Chart
              chartType="AreaChart"
              data={data}
              width="100%"
              height="400px"
              options={options}
              legendToggle
            />
          </ResultItem>
        </MainResult> }
        
        
      </Wrap>
    </Container>
  )
}

export default Statistic

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
`;
const MainResult = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;
const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.span`
  font-size: 20px;
  line-height: 19.14px;
  padding-bottom: 5px;
  text-transform: uppercase;
  border-bottom: 1px solid #25BA00;
  margin-left: 90px;
  font-weight: 700;
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
