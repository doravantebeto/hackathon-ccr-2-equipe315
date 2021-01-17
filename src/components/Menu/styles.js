import styled from 'styled-components'
import { FiHome, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 55px;
  position:fixed;
  bottom: 0px;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`

export const IconLabel = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 9px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
  color: #B7B5B5;
  margin-top:5px;
`

export const Dot = styled.div`

  width:8px;
  height:8px;
  margin-top:3px;
  border-radius:50%;
  background-color:#FFCF2A;

`

export const MenuItem = styled(Link)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border:none;
  background:transparent;
  width:fit-content;
  text-decoration:none;

  ${props => props.selected ? 'color:#FFCF2A;' : 'color:#B7B5B5;'}

`

export const HomeIcon = styled(FiHome)`
  font-size:30px;
`

export const ShopIcon = styled(FiShoppingBag)`
  font-size:30px;
`

export const ProfileIcon = styled.img`
  width:30px;
`
