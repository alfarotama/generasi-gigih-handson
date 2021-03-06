import React from "react";
import Gif from "../../components/giphy_gif";
import data from "../../data/dummy_gifs";

function Home() {
	const filtered_data = data.filter((item) => {
		return item.rating === "g";
	});
	console.log(filtered_data);

	return (
		<>
			<div className="bg-gray-100 p-8 rounded-lg flex flex-wrap">
				{filtered_data.map((item) => {
					return <Gif key={item.id} url={item.url} title={item.title} />;
				})}
			</div>
		</>
	);
}

export default Home;
