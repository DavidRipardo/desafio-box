import React from "react";
import ReactDOM from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";
import { routes } from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";

registerLicense(
	"Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeUx0QXxbf1x0ZFNMZVpbRHVPMyBoS35RckVlW3tednFTRmRdVEZ3",
);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>,
);
