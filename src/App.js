// import logo from './logo.svg';
// import './App.css';

import GiphyPage from "./page/home";

function App() {
	console.log(process.env.REACT_APP_GIPHY_KEY);

	return <GiphyPage />;
}

export default App;
