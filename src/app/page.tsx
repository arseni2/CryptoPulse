import BubbleChart from "@/components/BubbleChart";
import {Button, Dropdown, Flex, Space} from "antd";
import React from "react";
import Header from "@/components/Header";
import {SearchOutlined} from "@ant-design/icons";
import SearchModal from "@/components/SearchModal";


export default function Home() {
	return (
		<Flex vertical gap={"small"}>
			<Header title={"Chart"}>
				<Dropdown menu={{
					items: [
						{
							key: "1h",
							label: "1h",
						},
						{
							key: "1d",
							label: "1d",
						},
						{
							key: "7d",
							label: "7d",
						},
						{
							key: "month",
							label: "month",
						},
						{
							key: "year",
							label: "year",
						},
					]
				}}>
					<Button>
						<Space size={"large"}>
							week
							<svg style={{width: '18px', height: '18px', color: "rgb(107 114 128)"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 26 16">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m19 9-7 7-7-7"/>
							</svg>
						</Space>
					</Button>
				</Dropdown>

				<Dropdown menu={{
					items: [
						{
							key: "test",
							label: "100-200",
						},
						{
							key: "test2",
							label: "200-300",
						},
					]
				}}>
					<Button>
						<Space>
							1-100
							<svg style={{width: '18px', height: '18px'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 16">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
							</svg>
						</Space>
					</Button>
				</Dropdown>

				<SearchModal>
					<div className={"iconWrapper"}>
						<SearchOutlined style={{fontSize: "18px", color: "#1C64F2"}}/>
					</div>
				</SearchModal>
			</Header>
			<BubbleChart/>
		</Flex>
	);
}
