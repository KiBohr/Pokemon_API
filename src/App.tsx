import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Filter from "./pages/filter/Filter"
import FilteredPokemon from "./pages/filteredPokemon/FilteredPokemon"
import Detail from "./pages/detail/Detail"

function App() {

  const router = createBrowserRouter( createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="filter" element={<Filter/>}/>
        <Route path="filteredPokemon" element={<FilteredPokemon/>}/>
        <Route path="detail" element={<Detail/>}/>
      </Route>
  ))
  return (
    <main className="font-[Roboto] bg-background">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
