"use client"
import {Flex, Typography} from 'antd';
import React from 'react';

type propsType = {
	children: React.ReactNode;
	title: string
}
const Header: React.FC<propsType> = (props: propsType) => {
	return (
		<Flex style={{borderBottom: "1px solid rgba(5, 5, 5, 0.06)", padding: "5.5px 0px 3.5px"}} justify={"space-between"}>
			<Typography.Text strong style={{fontSize: "16px"}}>
				{props.title}
			</Typography.Text>

			<Flex gap={"small"}>
				{props.children}
			</Flex>


		</Flex>
	);
};

export default Header;