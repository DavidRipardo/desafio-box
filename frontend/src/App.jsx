import { AuthProvider } from "./context/AuthContext";
import { AppRouter } from "./routes/PublicRoutes";
export function App() {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
}
