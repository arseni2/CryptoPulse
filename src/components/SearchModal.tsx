"use client"
import React, {useState} from 'react';
import {Flex, Input, Modal} from "antd";
import Image from "next/image"
import {SearchOutlined, StarOutlined, StarTwoTone} from "@ant-design/icons";

const SearchModal = (props: any) => {
	const [isClickToFavorite, setIsClickToFavorite] = useState(false)
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const hideModal = () => {
		setOpen(false);
	};
	return (
		<>
			<div onClick={showModal}>
				{props.children}
			</div>
			<Modal
				title="Search coins"
				open={open}
				onOk={hideModal}
				onCancel={hideModal}
				footer={null}
			>
				<Input placeholder="default size" prefix={<SearchOutlined style={{paddingRight: "10px", color: "rgba(0, 0, 0, 0.45)"}}/>}/>

				<Flex vertical style={{marginTop: "20px"}}>
					<Flex align={"center"} className={"divide-y listItem"} gap={"small"}>

						{isClickToFavorite ? <StarTwoTone twoToneColor={"#e5c129"} style={{fontSize: "17px"}} /> : <StarOutlined style={{fontSize: "17px"}}/>}


						<div style={{fontWeight: 500, marginLeft: "10px"}}>Bitcoin</div>

						<p style={{fontSize: "14px", margin: 0, color: "rgba(0, 0, 0, 0.45)"}}>#1</p>

						<Image width={20} height={20} alt={"BTC"} loader={() => "https://cryptobubbles.net/backend/data/logos/1.png"} src={"https://cryptobubbles.net/backend/data/logos/1.png"}/>

						<div style={{marginLeft: "auto", color: "rgba(0, 0, 0, 0.45)"}}>BTC</div>
					</Flex>
				</Flex>
			</Modal>
		</>
	);
};

export default SearchModal;