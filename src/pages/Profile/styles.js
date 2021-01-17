import styled from 'styled-components'

export const Container = styled.div`

  width:100%;
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;

`



export const PersonalCardContainer = styled.div`

  padding:10px;
  width:90vw;
  max-width:400px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;

`

export const ProfileSection = styled.div`

  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;

`


export const ProfileSectionLeft = styled.div`

  margin:0px 10px;

`

export const ProfileSectionRight = styled.div`

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;

`
export const ProfilePicture = styled.img`

  

`

export const Name = styled.div`

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.3px;

  color: #B09FFF;  

`

export const School = styled.div`

  
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;

`

export const Since = styled.div`

  
font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 14px;
text-align: center;
letter-spacing: -0.3px;
color: #000000;

`

export const InfoSection = styled.div`

  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  margin:20px 0px;

`

export const InfoItem = styled.div`

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80px;

`

export const InfoStatus = styled.div`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
text-align: center;
letter-spacing: -0.3px;

color: #000000;

`

export const InfoDescription = styled.div`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 12px;
text-align: center;
letter-spacing: -0.3px;

color: #B09FFF;
  

`


export const SectionTitle = styled.div`

  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  padding-left:20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #B09FFF;
  margin-top:15px;
  max-width:400px;


`

export const CoinHistoryCardContainer = styled.div`

  width:90vw;
  padding:20px;
  max-width:400px;

`

export const Balance = styled.div`

  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;

`

export const Number = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #000000;
  margin-right:5px;
`

export const CoinsIcon = styled.img`
  width:25px;
`

export const BalanceLabel = styled.div`
  width:100%;
  text-align:center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #000000;
`

export const HistoryContainer = styled.div`

  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  margin-top:20px;

`

export const HistoryItem = styled.div`

  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

  & + &{

    margin-top:5px;

  }

`

export const HistoryDate = styled.div`

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #000000;

`

export const HistoryLabel = styled.div`

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #000000;

`

export const HistoryAction = styled.div`


  width:50px;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;

`

export const HistoryBalance = styled.div`


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 12px;
text-align: center;
letter-spacing: -0.3px;
color: #000000;

`

export const HistoryCoinIcon = styled.img`

  margin-left:5px;

`

export const Spacer = styled.div`
height:100px;`
