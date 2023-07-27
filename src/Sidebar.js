import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
background: #428f56;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const NavIcon = styled(Link)`
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background:#428f56;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);
const ProfileContainer=styled.div`
    margin-right:20px
`;
const MenuContainer=styled.div`
    margin-left:20px
`;
return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
        <MenuContainer>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
        </MenuContainer>
		<h1
			style={{ textAlign: "center",
					marginLeft: "200px",
					color: "#252831" }}
		>
			Welcome
		</h1>
        <ProfileContainer>
            <NavIcon to="/profile" >
                <CgIcons.CgProfile/>
            </NavIcon>
        </ProfileContainer>
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
