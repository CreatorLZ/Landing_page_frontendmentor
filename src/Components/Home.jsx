import { KeyboardArrowDown, KeyboardArrowUp, CloseOutlined} from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { mobile } from './responsive'
import {SidebarData, } from './SidebarData'
import SubMenu from './SubMenu';


const Container = styled.div`

`
const Wrapper = styled.div`
width: 100%;
height: 100%;
background-color: hsl(0, 0%, 98.0392156862745%);
overflow: hidden;
margin:0;
padding:0;
display: flex;
flex-direction: column;
${mobile({flexDirection:"column"})};
`
const Navbar = styled.div`
width: 100%;
height:50px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
display: flex;
`

const Right = styled.div`
display: flex;
`

const Mainbody = styled.div`
display: flex;
${mobile({flexDirection:"column"})};

`

const Rightbody = styled.div`
flex: 1;
display: flex;
padding: 0rem 1rem 2rem 0rem;
${mobile({display: "flex"})};

`
const Desktopimage = styled.div`
height: 500px;
display: flex;
width:100px;
${mobile({display: "none"})};

`
const Mobileimage = styled.div`
display: none;
${mobile({display: "flex", marginTop:"15px"})};
align-items: center;
justify-content: center;
object-fit: cover;
`

const Leftbody = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
margin:0;
margin-left: 150px;
${mobile({display: "flex", marginLeft:"0px", alignItems:"center"})};
`
const Bigtext = styled.h1`
font-weight: 700;
font-size: 70px;
letter-spacing: 3px;
margin:0;
margin-top: 110px;
margin-bottom:0px;
${mobile({display: "none"})};
`
const Bigtextmobile = styled.h1`
font-weight: 700;
font-size: 50px;
text-align: center;
display: none;
${mobile({display: "flex"})};
`
const Smalltext = styled.span`
color:black;
font-weight: 500;
display: flex;
font-size: 18px;
color:gray;
${mobile({textAlign:"center", display:"none"})};
`

const Smalltextmobile = styled.span`
margin-bottom: 50px;
font-size: 18px;
letter-spacing: 1px;
font-weight: 500;
display:none;
${mobile({textAlign:"center", display:"flex",letterSpacing:"1px", color:"gray"})};
`
const Iconstab = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-right: 240px;
${mobile({justifyContent:"space-between",marginLeft:"240px" })};
`


const Logo = styled.div`
margin:10px 80px 80px 20px;
:hover{
  cursor: pointer;
}
${mobile({margin:"20px 80px 80px 20px"})};
`
const Learn = styled.button`
width:130px;
height: 40px;
border: 1px solid black;
border-radius: 10px;
margin-bottom: 20px;
background-color: black;
color: white;

:hover{
  background-color: transparent;
  color:black;
  transition: 350ms;
  cursor:pointer;
}
`
const Dropdownitem = styled.div`
display:flex;
margin:20px 20px 40px 0px;
align-items:center;
justify-content:center;
${mobile({display: "none" })};
position: relative;
:hover{
  cursor: pointer;
 color:gray;
}
`
const Desktopbuttons = styled.div`
display:flex;
${mobile({display: "none" })};
:hover{
  cursor: pointer;
}
`
const Hambuger = styled.div`
display:none;
margin:23px 20px 20px 20px;
:hover{
  cursor: pointer;
}
${mobile({display: "flex" })};
`

const Button = styled.button`
margin:10px 20px 20px 20px;
width:100px;
height: 35px;
background-color: transparent;
border-radius: 10px;

font-size: 16px;
:hover{
  transform: scale(1.03);
  cursor: pointer;
}
`


const Text = styled.span`
  align-items: center;
  justify-content: center;

`;

const DropDownListContainer = styled.div`
display: flex;
flex-direction: column;
width:130px;
position: absolute;
top:15px;
right:20px;

`;

const DropDownList = styled.div`
  padding: 0;
  margin:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  height: 135px;
  width: 125px;
  border-radius: 10px;
  :first-child{
    padding-top: 0.8em;
  };
 
`
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  width: 100%;
  &:hover{
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
const SidebarNav = styled.nav`
background-color:hsl(0, 0%, 98.0392156862745%);
width: 400px;
height: 100vh;
display: none;
justify-content: center;
position: fixed;
top: 0;
right: ${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 650ms;
z-index: 75;
box-sizing: border-box;
margin:0;
padding: 0;
${mobile({width: "230px", display:"flex" })};
`

const Adjust = styled.div `
position: absolute;
top: 10px;
right:10px;
color: black;
`;

const SidebarWrap= styled.div`
width: 100%;
margin-top: 50px;
overflow-y: scroll;
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background-color: white;
}
::-webkit-scrollbar-thumb {
  background-color: #d1cfcf;
}
`
const Sidebarbuttons= styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Overlay = styled.div`
position: fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
width: 100%;
height: 100%;
z-index: 50;
display: none;
background-color: rgba(0, 0, 0, 0.1);
transition: 650ms;
${mobile({display:"flex" })};
`;

const Image = styled.img`

`;


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggling2 = () => setIsOpen2(!isOpen2);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dropDownRef = useRef(null);
  useEffect(()=>{
    const PageClickEvent = (e) =>{
      if(dropDownRef.current !== null && !dropDownRef.current.contains(e.target)){
       setIsOpen(!isOpen);
      }
    };
    if(isOpen){
      window.addEventListener('click', PageClickEvent);
    }
    return()=>{
      window.removeEventListener('click', PageClickEvent);
    }
  },[isOpen])

  return (
    <Container>
      <Wrapper>
      <Navbar>
        <Left>
        <Logo>
        <svg width="84" height="27" xmlns="http://www.w3.org/2000/svg"><path d="M8.852 19.42c-1.108 0-2.175-.128-3.202-.385a9.648 9.648 0 0 1-2.756-1.137c-.811-.502-1.453-1.13-1.925-1.882-.473-.752-.709-1.63-.709-2.633v-.316h5.39v.246c0 .676.3 1.172.901 1.487.601.315 1.415.472 2.441.472a7.08 7.08 0 0 0 1.55-.166c.495-.11.903-.291 1.224-.542.321-.251.482-.569.482-.954 0-.618-.342-1.056-1.024-1.313-.683-.256-1.777-.513-3.282-.77a21.716 21.716 0 0 1-2.59-.595A10.937 10.937 0 0 1 2.938 9.91 5.28 5.28 0 0 1 1.17 8.28C.727 7.622.505 6.82.505 5.875c0-1.26.382-2.322 1.146-3.185.764-.863 1.782-1.517 3.054-1.96C5.977.287 7.377.065 8.905.065c1.458 0 2.818.242 4.078.726 1.26.484 2.28 1.179 3.062 2.083.782.904 1.172 1.992 1.172 3.264v.245H11.88v-.21c0-.467-.149-.846-.446-1.138a2.804 2.804 0 0 0-1.129-.656 4.616 4.616 0 0 0-1.418-.219c-.443 0-.9.05-1.373.149-.473.099-.872.262-1.199.49-.327.227-.49.545-.49.954 0 .396.175.72.525.97.35.252.84.456 1.47.613.63.158 1.36.306 2.188.447.781.128 1.607.306 2.476.533.869.228 1.686.549 2.45.963a5.34 5.34 0 0 1 1.855 1.627c.472.671.709 1.52.709 2.546 0 1.062-.245 1.972-.735 2.73a5.607 5.607 0 0 1-1.987 1.847 10.04 10.04 0 0 1-2.782 1.05c-1.021.227-2.068.341-3.142.341ZM33.48 19V8.92c0-.77-.1-1.473-.298-2.109a2.965 2.965 0 0 0-1.067-1.531c-.513-.385-1.254-.577-2.223-.577-.84 0-1.566.192-2.178.577a3.754 3.754 0 0 0-1.41 1.61c-.326.688-.49 1.482-.49 2.38L24.31 8.185c0-1.61.35-3.022 1.05-4.235a7.627 7.627 0 0 1 2.844-2.853C29.398.41 30.726.066 32.183.066c1.53 0 2.786.306 3.772.919.986.612 1.721 1.464 2.205 2.555.484 1.09.726 2.365.726 3.824V19H33.48Zm-13.09 0V.415h5.425V19h-5.425Zm28.389.385c-1.354 0-2.558-.216-3.614-.648-1.056-.431-1.881-1.055-2.476-1.872-.595-.817-.893-1.808-.893-2.975 0-1.318.362-2.392 1.085-3.22.724-.828 1.683-1.461 2.879-1.899a15.898 15.898 0 0 1 3.894-.866c2.041-.198 3.45-.38 4.226-.542.776-.164 1.164-.45 1.164-.858V6.47c0-.688-.33-1.23-.989-1.627-.66-.397-1.578-.595-2.756-.595-1.249 0-2.202.224-2.861.673-.66.45-.99 1.135-.99 2.056H42.11c0-1.493.406-2.753 1.217-3.78.81-1.026 1.91-1.805 3.298-2.336 1.389-.53 2.958-.796 4.708-.796 1.633 0 3.144.248 4.532.744 1.389.496 2.506 1.24 3.352 2.231.845.992 1.268 2.252 1.268 3.78v8.032c0 .479.015.937.044 1.374.03.438.096.837.201 1.199.117.408.263.747.438 1.015.175.268.32.455.437.56h-5.337a3.723 3.723 0 0 1-.376-.508 3.962 3.962 0 0 1-.43-.892 7.195 7.195 0 0 1-.305-1.234 9.674 9.674 0 0 1-.097-1.461l1.12.77c-.326.77-.854 1.432-1.583 1.986-.73.554-1.593.98-2.59 1.278-.998.297-2.074.446-3.23.446Zm1.452-4.06a6.14 6.14 0 0 0 2.389-.464A4.104 4.104 0 0 0 54.43 13.4c.467-.665.7-1.534.7-2.608V8.92l1.348 1.313c-.77.28-1.66.51-2.669.69-1.01.182-2.015.324-3.019.43-1.19.116-2.08.317-2.668.603-.59.286-.884.767-.884 1.444 0 .642.25 1.123.752 1.444.502.32 1.249.481 2.24.481Zm13.742 11.323V.415h5.442v26.233h-5.442Zm11.182-7.228a7.325 7.325 0 0 1-4.042-1.181c-1.225-.788-2.205-1.85-2.94-3.185-.735-1.336-1.103-2.838-1.103-4.507v-.28l2.345-.052v.21c0 .863.21 1.619.63 2.266.42.648.963 1.146 1.628 1.496.665.35 1.359.526 2.082.526 1.19 0 2.226-.412 3.106-1.234.881-.823 1.322-2.109 1.322-3.859s-.438-3.025-1.313-3.824c-.875-.799-1.913-1.199-3.115-1.199-.723 0-1.417.173-2.082.517a4.308 4.308 0 0 0-1.628 1.461c-.42.63-.63 1.383-.63 2.257l-2.345-.14c0-1.68.368-3.164 1.103-4.453.735-1.29 1.715-2.307 2.94-3.054a7.619 7.619 0 0 1 4.042-1.12c1.505 0 2.911.37 4.218 1.111 1.306.741 2.365 1.823 3.176 3.247.81 1.423 1.216 3.155 1.216 5.197 0 2.135-.396 3.932-1.19 5.39-.793 1.458-1.843 2.558-3.15 3.299a8.51 8.51 0 0 1-4.27 1.111Z" fill="#151515"/></svg>
        </Logo>
        <Dropdownitem ref={dropDownRef} onClick={toggling}>Features {isOpen ? <KeyboardArrowUp/>  : <KeyboardArrowDown/> }
           {isOpen && (
             <DropDownListContainer>
            <DropDownList>
              <ListItem><img src="./images/icon-todo.svg" alt="" /><Text style={{marginLeft:"10px"}}>Todo List</Text></ListItem>
              <ListItem><img src="./images/icon-calendar.svg" alt=""  style={{marginRight:"10px"}} />Calender</ListItem>
              <ListItem><img src="./images/icon-reminders.svg" alt=""  style={{marginRight:"10px"}} />Reminder</ListItem>
              <ListItem><img src="./images/icon-planning.svg" alt=""  style={{marginRight:"10px"}} />Planning</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
         </Dropdownitem>

        <Dropdownitem onClick={toggling2}>Company {isOpen2 ? <KeyboardArrowUp/>  : <KeyboardArrowDown/>}
        {isOpen2 && (
          <DropDownListContainer style={{left:"10px", width:"80px", top:"20px" }}>
            <DropDownList style={{height:"110px",width:"100px"}}>
              <ListItem>History</ListItem>
              <ListItem>Our Team</ListItem>
              <ListItem>Blog</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
         </Dropdownitem>
        <Dropdownitem>Careers</Dropdownitem>
        <Dropdownitem>About</Dropdownitem>
        </Left>
        <Right>
          <Desktopbuttons>
          <Button style={{border:"none"}}>Login</Button>
          <Button >Register</Button>
          </Desktopbuttons>
          <Overlay sidebar={sidebar} onClick={showSidebar}/>
          <Hambuger onClick={showSidebar}><svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg></Hambuger>
          <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <Adjust>
            <CloseOutlined style={{fontWeight: "900", fontSize: "40px", marginBottom:"50px"}} onClick={showSidebar}/> 
            </Adjust>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key = {index} />
          })}
          <Sidebarbuttons>
          <Button style={{marginTop:"50px",border:"none",width:"180px", height:"40px"}}>Login</Button>
          <Button style={{width:"190px", height:"45px"}} >Register</Button>
          </Sidebarbuttons>
          </SidebarWrap>
        </SidebarNav>
        </Right>
        </Navbar>
        <Mobileimage>
          <img style={{height:"300px", maxWidth:"860px", objectFit:"cover"}} src="./images/image-hero-mobile.png" alt="mobile" />
        </Mobileimage>
      <Mainbody>
        <Leftbody>
          <Bigtext>Make <br /> remote work</Bigtext>
          <Bigtextmobile>Make remote work</Bigtextmobile>
          <Smalltext>
            Get your team in sync, no matter your location.
            <br/>
             Streamline processes, 
             create team rituals, and
             <br/>
              watch productivity soar.
            </Smalltext>
            <Smalltextmobile>Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.
              </Smalltextmobile>
          <Learn >Learn more</Learn>
          <Iconstab>
            <img style={{width:"80px",marginRight:"7px"}} src="./images/client-databiz.svg" alt="" />
            <img style={{width:"80px",marginRight:"7px"}} src="./images/client-audiophile.svg" alt="" />
            <img style={{width:"80px",marginRight:"7px"}} src="./images/client-meet.svg" alt="" />
            <img style={{width:"80px",marginRight:"0px"}} src="./images/client-maker.svg" alt="" />
          </Iconstab>
        </Leftbody>
        <Rightbody>
          <Desktopimage>
          <Image src='./images/image-hero-desktop.png' alt=''/> </Desktopimage>
        </Rightbody>
      </Mainbody>
      <Smalltext style={{alignItems:"center", justifyContent:"center", fontSize:"12px", fontWeight:"700"}}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" >Frontend Mentor</a>. 
        Coded by <a href="https://github.com/CreatorLZ" >Isaac C Anyim</a>.
      </Smalltext>
      <Smalltextmobile style={{alignItems:"center", justifyContent:"center", fontSize:"12px", fontWeight:"700"}}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" >Frontend Mentor</a>. 
      </Smalltextmobile>
      <Smalltextmobile style={{alignItems:"center", justifyContent:"center", fontSize:"12px", fontWeight:"700",}}>
      Coded by <a href="https://github.com/CreatorLZ" >Isaac C Anyim</a>.
      </Smalltextmobile>
      </Wrapper>
    </Container>
  )
}

export default Home
