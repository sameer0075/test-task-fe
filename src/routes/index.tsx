import DashboardLayout from "../Components/Generic-Components/DashboardLayout";
import AuthPage from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import Issues from "../pages/Issues";
import NotFoundPage from "../pages/NotFound";


/**
 * PublicRoutes is an array of objects that define the routes that do not require authentication.
 * Each object has a path and a component.
 * The component is the root component for the route.
 */
export const PublicRoutes = [
	{
		// The path for the root route
		path: "/",
		// The component for the root route
		component: <AuthPage />,
	},
	{
		// The path for the not found route
		// Catches all routes that are not defined in the other routes
		path: "*",
		// The component for the not found route
		component: <NotFoundPage/> // Renders the NotFound component when the path is not found
	}
];

/**
 * PrivateRoutes is an array of objects that define the routes that require authentication.
 * Each object has a path and a component.
 * The component is wrapped in the DashboardLayout component.
 */
export const PrivateRoutes = [
	{
		// The path for the dashboard route
		path: "/",
		// The component for the dashboard route
		// The DashboardLayout component is wrapped around the Dashboard component
		component: <DashboardLayout>
			<Dashboard />
		</DashboardLayout>,
	},
	{
		// The path for the issues route
		path: "/issues",
		// The component for the issues route
		// The DashboardLayout component is wrapped around the Issues component
		component: <DashboardLayout>
			<Issues />
		</DashboardLayout>,
	},
];
