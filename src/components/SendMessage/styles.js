import styled from 'styled-components'
import { FiSend } from 'react-icons/fi'

export const Container = styled.div`

  height: 41px;
  min-width: 301px;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  position:fixed;
  bottom: 20px;
  padding:0px 20px;

`

export const Input = styled.input`

  height: 41px;
  width:100%;
  mix-blend-mode: normal;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
  padding:10px;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.30000001192092896px;
  text-align: left;


`

export const SendButton = styled.button`

  background-color:#B09FFF;
  border-radius:50%;
  width:35px;
  height:35px;
  min-width:35px;
  border:1px solid #F2F2F2;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin-left:10px;

`

export const SendIcon = styled(FiSend)`

  font-size:20px;
  color:white;

`