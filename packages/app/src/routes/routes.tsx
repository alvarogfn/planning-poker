import LoadingPage from "@/pages/loading";
import { useAuthContext } from "@/providers/AuthProvider";
import type { Router } from "@remix-run/router";
import { lazy } from "react";
import { Navigate, Outlet, createBrowserRouter, useLocation } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home"));
const HomeDefaultPage = lazy(() => import("@/pages/home/default"));
const CreateGamePage = lazy(() => import("@/pages/create/create-page"));
const GamePage = lazy(() => import("@/pages/game/GamePage"));
const SignInPage = lazy(() => import("@/pages/sign-in/sign-in-page"));

const AuthenticationRoute = () => {
	const location = useLocation();
	const { isAuth, isAuthenticating } = useAuthContext();

	if (isAuthenticating) return <LoadingPage />;

	if (!isAuth) {
		return <Navigate to="/sign-in" state={{ redirectTo: location }} />;
	}

	return <Outlet />;
};

const routes: Router = createBrowserRouter([
	{
		path: "/",
		element: <AuthenticationRoute />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				children: [
					{
						path: "/",
						element: <HomeDefaultPage />,
					},
					{
						path: "/new-game",
						element: <CreateGamePage />,
					},
					{
						path: "/join-game",
					},
				],
			},
			{
				path: "/game/:gameId",
				element: <GamePage />,
			},
		],
	},
	{
		path: "/sign-in",
		element: <SignInPage />,
	},
]);

export default routes;
