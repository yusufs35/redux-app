import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../layouts/root-layout";
import { Counter } from "../component/counter";
import { HomePage } from "../pages/home-page";
import { AboutPage } from "../pages/about-page";
import { BlogPage } from "../pages/blog-page";
import { ContactPage } from "../pages/contact-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "blog",
				element: <BlogPage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
		],
	},
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
