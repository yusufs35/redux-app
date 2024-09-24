import React from "react";
import { Header } from "../component/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../component/footer";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const RootLayout = () => {
	const mode = useSelector((state) => state.theme.mode);

	return (
		<div className={`vh-100 d-flex flex-column ${mode}`}>
			<Header />
			<Container className="flex-grow-1 my-2">
				<Outlet />
			</Container>
			<Footer />
		</div>
	);
};
