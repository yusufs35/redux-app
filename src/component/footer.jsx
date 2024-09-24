import React from "react";
import { $t } from "../helpers/locale-helper";

export const Footer = () => {

	return (
		<footer className="bg-danger-subtle text-center p-4">
			&copy; {new Date().getFullYear()} - {$t("copyright-text")}
		</footer>
	);
};
