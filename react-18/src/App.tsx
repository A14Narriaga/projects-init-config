import { Provider } from "react-redux"
import "./App.scss"
import { Store } from "./redux"

function App() {
	return (
		<Provider store={Store}>
			hola
		</Provider>
	)
}

export default App
