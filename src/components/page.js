import TitleWidget from "./title/index";
import ImageWidget from "./images/index";
import gif from "./gif-api";

const Page = () => {
	const gifList = gif.map((gifimg) => {
		if (gifimg.rating === "g") {
			return <ImageWidget url={gifimg.url} key={gifimg.id} />;
		}
	});
	return (
		<div className="Page">
			<input />
			<button>Search</button>
			<TitleWidget title={gif.title} />
			<p>{gifList}</p>
		</div>
	);
};

export default Page;
