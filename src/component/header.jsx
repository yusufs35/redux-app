import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./theme-switcher";
import { LangSwitcher } from "./lang-switcher";
import { $t } from "../helpers/locale-helper";

export const Header = () => {
	return (
		<Navbar expand="lg" className="bg-danger-subtle">
			<Container>
				<Navbar.Brand to="/" as={Link}>
					REDUX APP
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link to="/" as={Link}>
							{$t("home")}
						</Nav.Link>
						<Nav.Link to="/about" as={Link}>
							{$t("about")}
						</Nav.Link>
						<Nav.Link to="/blog" as={Link}>
							{$t("blog")}
						</Nav.Link>
						<Nav.Link to="/contact" as={Link}>
							{$t("contact")}
						</Nav.Link>
					</Nav>

					<div className="d-flex flex-column gap-2 flex-lg-row align-items-lg-center">
						<ThemeSwitcher />
						<LangSwitcher />
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
