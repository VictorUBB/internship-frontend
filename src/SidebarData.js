import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
{
	title: "Waiting approvals",
	path: "/waiting",
	icon: <IoIcons.IoIosCheckmarkCircleOutline />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Users",
		path: "/waiting/users",
		icon: <FaIcons.FaUser />,
	},
	{
		title: "Profiles",
		path: "/waiting/profiles",
		icon: <AiIcons.AiFillProfile />,
	},
	],
},
{
	title: "Audit",
	path: "/audit",
	icon: <FaIcons.FaHistory />,
	
},
{
	title: "Create",
	path: "/create/users",
	icon: <IoIcons.IoMdCreate />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Users",
		path: "/create/users",
		icon: <FaIcons.FaUser />,
	},
	{
		title: "Profiles",
		path: "/create/profile",
		icon: <AiIcons.AiFillProfile />,
	},
	],
},
// {
// 	title: "Contact",
// 	path: "/contact",
// 	icon: <FaIcons.FaPhone />,
// },
// {
// 	title: "Events",
// 	path: "/events",
// 	icon: <FaIcons.FaEnvelopeOpenText />,

// 	iconClosed: <RiIcons.RiArrowDownSFill />,
// 	iconOpened: <RiIcons.RiArrowUpSFill />,

// 	subNav: [
// 	{
// 		title: "Event 1",
// 		path: "/events/events1",
// 		icon: <IoIcons.IoIosPaper />,
// 	},
// 	{
// 		title: "Event 2",
// 		path: "/events/events2",
// 		icon: <IoIcons.IoIosPaper />,
// 	},
// 	],
// },
// {
// 	title: "Support",
// 	path: "/support",
// 	icon: <IoIcons.IoMdHelpCircle />,
// },
];
export default SidebarData;