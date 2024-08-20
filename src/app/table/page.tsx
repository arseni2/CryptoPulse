"use client"
import React from 'react';
import {Button, Dropdown, Space, Table, TableColumnsType, TableProps} from "antd";
import SearchModal from "@/components/SearchModal";
import {SearchOutlined} from "@ant-design/icons";
import Header from "@/components/Header";

interface DataType {
	key: React.Key;
	name: string;
	age: number;
	address: string;
}

const Page = () => {
	const columns: TableColumnsType<DataType> = [
		{
			title: 'rank',
			dataIndex: 'name',
			showSorterTooltip: { target: 'full-header' },
			// filters: [
			// 	{
			// 		text: 'Joe',
			// 		value: 'Joe',
			// 	},
			// 	{
			// 		text: 'Jim',
			// 		value: 'Jim',
			// 	},
			// 	{
			// 		text: 'Submenu',
			// 		value: 'Submenu',
			// 		children: [
			// 			{
			// 				text: 'Green',
			// 				value: 'Green',
			// 			},
			// 			{
			// 				text: 'Black',
			// 				value: 'Black',
			// 			},
			// 		],
			// 	},
			// ],
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			onFilter: (value, record) => record.name.indexOf(value as string) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ['descend'],
		},
		{
			title: 'Name',
			dataIndex: 'Name',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: 'Price',
			dataIndex: 'address',
			onFilter: (value, record) => record.address.indexOf(value as string) === 0,
		},
		{
			title: 'Change(24h)',
			dataIndex: 'address',
			onFilter: (value, record) => record.address.indexOf(value as string) === 0,
		},
		{
			title: 'Capital',
			dataIndex: 'address',
			onFilter: (value, record) => record.address.indexOf(value as string) === 0,
		},
		{
			title: 'Short positions',
			dataIndex: 'address',
			onFilter: (value, record) => record.address.indexOf(value as string) === 0,
		},
		{
			title: 'Long positions',
			dataIndex: 'address',
			onFilter: (value, record) => record.address.indexOf(value as string) === 0,
		},
		{
			title: 'Buy/Sell',
			dataIndex: 'address',
			onFilter: (value, record) => record.address.indexOf(value as string) === 0,
		},
	];
	const data = [
		{
			key: '1',
			Name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sydney No. 1 Lake Park',
		},
		{
			key: '4',
			name: 'Jim Red',
			age: 32,
			address: 'London No. 2 Lake Park',
		},
	];
	const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
		console.log('params', pagination, filters, sorter, extra);
	};

	// @ts-ignore
	return (
		<div className={"flex flex-col gap-4"}>
			<Header title={"Table"}>
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

			<Table
				columns={columns}

				dataSource={data}
				onChange={onChange}
				showSorterTooltip={{ target: 'sorter-icon' }}
				pagination={false}
			/>
		</div>
	);
};

export default Page;