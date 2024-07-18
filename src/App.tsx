import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './routes';
import { RouteConfig } from './routes/Interface/interface';
import { getToken } from './Utils/helper-functions';

/**
 * App component is the root component of the application.
 * It renders different components based on whether the user is authenticated or not.
 *
 * @returns {JSX.Element} The App component.
 */
function App() {
  // Get the token from the local storage
  const token = getToken();

  return (
    <div className="App">
      {/* Wrap the routes with the BrowserRouter component */}
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
