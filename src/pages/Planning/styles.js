import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  height:fit-content;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
`


export const VocationLogo = styled.img`

  margin-top:20px;

`
export const VocationTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #FF5A5A;
  margin-top:10px;
`
export const VocationDescription = styled.div`
  width: 299px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.3px;

  color: #000000;


`

export const ExamplesTitle = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 13px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
  width:240px;
  margin-top:20px;

`
export const ExamplesContainer = styled.div`

  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items:flex-start;
  margin-top:10px;

`

export const ExamplesItem = styled.div`

  width:90px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;

`

export const ExamplesPhotoContainer = styled.div`
  width:90px;
  height:90px;
  overflow:hidden;
  border-radius:50%;
`

export const ExamplesPhoto = styled.img`
  width:90px;
`
export const ExamplesName = styled.div`

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  margin-top:5px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.3px;

  color: #FF5A5A;

`

export const ExamplesInfo = styled.div`

  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #000000;
  margin-top:10px;

`

export const PlanningTitle = styled.div`

font-family: Roboto;
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-align: center;
letter-spacing: -0.3px;
color: #FF5A5A;
width:80%;
margin-top:30px;

`

export const StepperItem = styled.div`

  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  padding:0px 20px;
  
`
export const StepperItemHeader = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;

`
export const StepperCircle = styled.div`

  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${props => props.disabled ? '#C4C4C4' : '#FF5A5A'};
  margin-right:10px;

`
export const StepperTitle = styled.div`
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
`

export const StepperItemBody = styled.div`

  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;

`
export const StepperItemLine = styled.div`

  width:1px;
  height:140px;
  background-color:#C4C4C4;
  margin:0px 15px;

`
export const StepperItemLineSeparatorContainer = styled.div`

  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  padding-left:20px;
  margin:5px 0px

`
export const StepperItemLineSeparator = styled.div`

  width:0.2px;
  height:30px;
  background-color:#C4C4C4;
  margin:0px 15px;

`

export const StepperItemContent = styled.div`

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  margin:10px 0px;

`
export const StepperItemText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 13px;
  letter-spacing: -0.3px;
  color: #000000;
`
export const StepperItemCoursesAdvisor = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: -0.30000001192092896px;
  text-align: left;
  margin:10px 0px;
`
export const StepperItemCoursesLink = styled.div`


font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 12px;
text-align: center;
letter-spacing: -0.3px;
text-decoration:underline;
color: #FF5A5A;

& + & {
  margin-top:10px;
}

`

export const Spacer = styled.div`

  height:200px;

`