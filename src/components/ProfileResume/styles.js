import styled from 'styled-components'

export const Container = styled.div`

  width:90%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  background: #FFCF2A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  margin-top:20px;
  padding:20px;

`

export const Picture = styled.img`

  width:90px;

`

export const Info = styled.div`

  width:100%;
  font-family: Roboto;
  font-style: normal;
  line-height: 19px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  margin-left:10px;

`
export const Name = styled.div`
  font-size: 24px;
  font-weight: 700;

`
export const Coins = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`
export const Number = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-right:5px;

`
export const CoinsIcon = styled.img``

export const Level = styled.div`
  font-size: 14px;
  font-weight: 700;
`
export const LevelBar = styled.div`
  width: 100%;
  height: 6px;
  background: #FFFFFF;
  border-radius: 10px;
`
export const LevelBarFill = styled.div`
width: 69%;
height: 6px;

background: #B09FFF;
border-radius: 10px;

`
