import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
	const location = useLocation();

	// hier muss der slash hin, ansonsten klappts nicht!
	const hideHeader = location.pathname === "/filter";

	return (
		<>
			{!hideHeader && <Header />}
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
