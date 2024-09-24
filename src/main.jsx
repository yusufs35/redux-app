import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css";
import "./styles/global.css";
import { StoreProvider } from "./store";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
	</StrictMode>
);
