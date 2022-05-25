//import logo from './logo.svg';
import './App.css';
import Movies from './components/movies.tsx';
//import NavBar from './components/navBar.jsx';
import Apis from './components/APIs.jsx';
import { Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound.jsx';
import BasicMenu from "./components/Nav.tsx";
import Welecome from "./components/Hello.jsx";
import { SnackbarProvider } from 'notistack';
import Login from './components/login.tsx';





function App() {
	return (

		<div className="App">

			<BasicMenu />
			<Routes>
				<Route path="/" element={<Welecome />} />
				<Route path="/login" element={<Login />} />
				<Route exact path="/Home" component={<Welecome />} />
				<Route path="movies" exact element={
					<SnackbarProvider maxSnack={3}
					autoHideDuration={3000}>
						<Movies />
					</SnackbarProvider>
				} />
				<Route path="apis" element={<Apis />} />
				<Route element={<NotFound />} />
			</Routes>
		</div>


	);
}

export default App;


