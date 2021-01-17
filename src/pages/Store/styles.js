import styled from 'styled-components'

export const Container = styled.div`

  width:100%;
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;

`


export const HorizontalSectionTitle = styled.div`

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
  color: #FF5A5A;
  margin-top:15px;

`


export const HorizontalSection = styled.div`

  width:100vw;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  overflow-x:scroll;
  padding:0px 10px;

`

export const HorizontalSectionCardBody = styled.div`
  height: 200px;
  padding:15px 5px;
  width: 180px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;

`

export const HorizontalSectionCardBodyImageFull = styled.div`
  height: 180px;
  padding:0px 0px 30px 0px;
  width: 180px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;

`

export const HorizontalSectionCardHeaderImage = styled.img`

  width:120px;

`

export const HorizontalSectionCardHeaderImageFull = styled.img`

  width:100%;
  border-radius:10px;

`

export const HorizontalSectionCardHeaderImageContainer = styled.div`

  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:150px;
  overflow-y:hidden;
  border-radius:10px;

`

export const HorizontalSectionCardTitle = styled.div`

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  text-align: center;
  letter-spacing: -0.3px;
  color: #FFCF2A;
  ${props => !!props.theme && `color: ${props.theme};`}
  width:90%;
  margin-top:10px;

`

export const HorizontalSectionCardCoins = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:10px;
`
export const HorizontalSectionCardCoinNumber = styled.div`font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  margin-right:2px;
`
export const HorizontalSectionCardCoinIcon = styled.img``



export const Spacer = styled.div`

  height:100px;

`