"use client"
import React from 'react';
import EventCard from "@/components/EventCard";
import Header from '@/components/Header';

const Page = () => {
	return (
		<>
			<Header title={"Events"}>
				children
			</Header>
			<EventCard />
		</>
	);
};

export default Page;