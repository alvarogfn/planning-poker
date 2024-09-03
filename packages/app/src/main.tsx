import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import App from "src/app.tsx";
import { RelayEnvironment } from "./config/relay-environment";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RelayEnvironmentProvider environment={RelayEnvironment}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</RelayEnvironmentProvider>,
);
