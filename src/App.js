import "./App.css";
import TitleWidget from "./components/title/index";
import ImageWidget from "./components/images/index";
import gif from "./components/gif-api";

const App = () => {
	return (
		<div className="App">
			<input />
			<button>Search</button>
			<TitleWidget title={gif.title} />
			<ImageWidget url={gif.url} />
		</div>
	);
};

export default App;
