import { Outlet } from "react-router-dom";
import { HomeHeader } from "./components/header";

export const HomePage = () => {
	return (
		<div>
			<HomeHeader />
			<Outlet />
		</div>
	);
};

export default HomePage;
