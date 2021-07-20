// merge image & text
import React from "react";

const Giphy = (props) => {
	return (
		<div>
			<img src={props.url} title={props.title} alt={props.title} />
			<p>{props.title}</p>
		</div>
	);
};

export default Giphy;
