import React from "react";
import Container from "./components/Container";
import ConfigContext from "./context/ConfigContext";
import data from "./config.json";

const App = () => {
	return (
		<ConfigContext.Provider value={data}>
			<Container />
		</ConfigContext.Provider>
	)
};

export default App;
