"use client";
import React from 'react';
import { Flex } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import { LineChartOutlined } from "@ant-design/icons";

const SideBar = () => {
	const router = useRouter();
	let pathname = usePathname(); // Get the current path
	if(pathname.length > 1) {
		pathname = pathname.substring(1, pathname.length)
	}
	const menuItems = [
		{ key: "/", label: "Chart" },
		{ key: "table", label: "Table" },
		{ key: "event", label: "Events" },
		{ key: "portfolio", label: "Portfolio" },
		{ key: "profile", label: "Profile" },
		{ key: "leaderboard", label: "Leaderboard" },
	];

	const activeMenuItemClass = "bg-blue-100 text-blue-600 p-2 rounded-lg flex items-center gap-3";

	const handleClick = (key: string) => {
		router.push(key);
	};

	return (
		<Flex className={"p-2"} vertical gap={"middle"}>
			<div className="flex flex-col border-r border-gray-200 w-52 h-screen">
				<div className="flex items-center gap-3 p-4">
					<svg
						width="32"
						height="32"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.6918 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
							fill="#007DFC"
						></path>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M10 1.47023e-06C10 1.31322 9.74135 2.61358 9.2388 3.82684C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 6.15916e-06 10L5.72205e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.8147e-06L10 1.47023e-06Z"
							fill="#007DFC"
						></path>
					</svg>

					<h3 className="text-lg font-semibold m-0">CryptoPulse</h3>
				</div>

				<ul className="flex flex-col gap-2 mr-2 font-medium">
					{menuItems.map((item) => (
						<li
							key={item.key}
							className={`${
								pathname.includes(item.key)
									? activeMenuItemClass
									: "transition-all flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-gray-100"
							}`}
							onClick={() => handleClick(item.key)}
						>
							<LineChartOutlined />
							<span>{item.label}</span>
						</li>
					))}
				</ul>
			</div>
		</Flex>
	);
};

export default SideBar;
