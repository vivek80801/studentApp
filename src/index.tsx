import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StudentsProvider } from "./context/StudentsContext";
import { TeacherProvider } from "./context/TeacherContext";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<StudentsProvider>
			<TeacherProvider>
				<App />
			</TeacherProvider>
		</StudentsProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.register();
