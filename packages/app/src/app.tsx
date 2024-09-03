import LoadingPage from "@/pages/loading";
import AuthProvider from "@/providers/AuthProvider";
import ThemeProvider from "@/providers/theme-provider";
import routes from "@/routes/routes";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

function App() {
	return (
		<ThemeProvider>
			<Suspense fallback={<LoadingPage />}>
				<AuthProvider>
					<RouterProvider router={routes} />
				</AuthProvider>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
