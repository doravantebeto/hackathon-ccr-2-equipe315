import styled from 'styled-components'

export const Container = styled.div`

  width:100%;
  height: 99px;
  background-color:${props => props.color || '#FFCF2A'};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;


`

export const Title = styled.div`

font-family: Roboto;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 23px;
letter-spacing: -0.30000001192092896px;
text-align: center;
color: #F5F5F5;

`