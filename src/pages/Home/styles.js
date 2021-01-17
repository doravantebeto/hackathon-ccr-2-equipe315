import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`

  width:100%;
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;

`



export const VocationContainer = styled(Link)`

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  padding:20px;
  max-width:400px;
  text-decoration:none;

`


export const VocationIcon = styled.img`

  width:80px;

`

export const VocationTitle = styled.div`

  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
  color: #FF5A5A;
  margin-top:15px;

`

export const VocationDescription = styled.div`
  max-width:70%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #0D0D0D;
  margin-top:5px;

`

export const VocationLink = styled.div`

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #FF5A5A;
  margin-top:8px;
  text-decoration:underline;

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
  color: #FFCF2A;
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
  padding:20px 10px;
  width: 240px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;

`

export const HorizontalSectionCardTitle = styled.div`

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  flex:1;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  text-align: center;
  letter-spacing: -0.3px;
  color: #FFCF2A;
  ${props => !!props.theme && `color: ${props.theme};`}
  width:80%;

`

export const HorizontalSectionCardSubTitle = styled.div`

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  text-align: center;
  color: #C0BEBE;
  margin-top:2px;

`

export const HorizontalSectionCardInfoContainer = styled.div`

  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:30px;

`

export const Separator = styled.div`

  width:1px;
  height:40px;
  background-color:#FFCF2A;
  background-color:${props => props.theme || '#FFCF2A'};
  margin: 0px 10px;

`

export const HorizontalSectionCardInfoItem = styled.div`

  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
  height:40px;

`

export const HorizontalSectionCardInfoTitle = styled.div`

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  text-align: center;
  margin-bottom:8px;

`

export const HorizontalSectionCardInfoDescription = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-align: center;


`

export const Spacer = styled.div`

  height:100px;

`