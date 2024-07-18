import DashboardLayout from "../Components/Generic-Components/DashboardLayout";
import Auth from "../Components/Modular-Components/Auth";
import Dashboard from "../pages/Dashboard";
import Issues from "../pages/Issues";


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
		component: <Auth />,
	},
];

/**
 * PrivateRoutes is an array of objects that define the routes that require authentication.
 * Each object has a path and a component.
 * The component is wrapped in the DashboardLayout component.
 */
export const PrivateRoutes = [
	{
		// The path for the dashboard route
		path: "/dashboard",
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
