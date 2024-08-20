import React from 'react';

const EventCard = () => {
	return (
		<div className="w-fit max-w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a className="w-fit block " href="#">
				<img className="rounded-t-lg max-h-[500px] max-w-[500px] w-full" src="https://smart-lab.ru/uploads/2024/images/23/56/04/2024/07/13/c27696.png" alt=""/>
			</a>
			
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
			
				<div className={"w-full flex justify-end"}>
					<a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
						Learn more
						<svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default EventCard;