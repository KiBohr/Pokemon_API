import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Filter from "./pages/filter/Filter";
import Detail from "./pages/detail/Detail";
import { useContext } from "react";
import { mainContext, PokeContext } from "./context/MainProvider";

function App() {
	const { dark } = useContext(mainContext) as PokeContext;

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='filter' element={<Filter />} />
				{/* der Path zu der DetailPokemon ansichtsSeite mit Verwendung von useParams */}
				<Route path='detail/:pokeDetailsParam' element={<Detail />} />
			</Route>
		)
	);
	return (
		<main 
		className={`font-[Roboto] bg-background ${dark && "bg-background-dark text-text-inner-dark"} text-background-dark`}>
			<RouterProvider router={router} />
		</main>
	);
}
export default App;
