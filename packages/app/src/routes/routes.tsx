import type { Router } from "@remix-run/router";
import { lazy } from "react";
import { createBrowserRouter, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "@/providers/AuthProvider";
import LoadingPage from "@/pages/loading";

const HomePage = lazy(async () => import("@/pages/home"));
const HomeDefaultPage = lazy(async () => import("@/pages/home/default"));
const CreateGamePage = lazy(async () => import("@/pages/create/CreatePage"));
const GamePage = lazy(async () => import("@/pages/game/GamePage"));
const SignInPage = lazy(async () => import("@/pages/sign-in/sign-in-page"));

function AuthenticationRoute() {
  const location = useLocation();
  const { isAuth, isAuthenticating } = useAuthContext();

  if (isAuthenticating) return <LoadingPage />;

  if (!isAuth) {
    return <Navigate state={{ redirectTo: location }} to="/sign-in" />;
  }

  return <Outlet />;
}

const routes: Router = createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <HomeDefaultPage />,
            path: "/",
          },
          {
            element: <CreateGamePage />,
            path: "/new-game",
          },
          {
            path: "/join-game",
          },
        ],
        element: <HomePage />,
        path: "/",
      },
      {
        element: <GamePage />,
        path: "/game/:gameId",
      },
    ],
    element: <AuthenticationRoute />,
    path: "/",
  },
  {
    element: <SignInPage />,
    path: "/sign-in",
  },
]);

export default routes;
