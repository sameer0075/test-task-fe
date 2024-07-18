import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getToken } from "./Utils/helper-functions";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { RouteConfig } from "./routes/Interface/interface";

function App() {
  const token = getToken()
  return (
    <div className="App">
      <BrowserRouter>
					<Routes>
						{!token
							? PublicRoutes.map(
									({ component, path }: RouteConfig, index: number) => (
										<Route key={index} path={path} element={component} />
									)
							  )
							: PrivateRoutes.map(
									({ component, path }: RouteConfig, index: number) => (
										<Route key={index} path={path} element={component} />
									)
							  )}
					</Routes>
				</BrowserRouter>
    </div>
  );
}

export default App;
