import React from "react";
import { $t } from "../helpers/locale-helper";

export const ContactPage = () => {
	return (
		<>
			<p>{$t("contact-highlight-text")}</p>
			<h2>{$t("contact-information")}</h2>

      <p><strong>{$t("address")}</strong>: Kerk St. No:13 </p>
      <p><strong>{$t("telephone")}</strong>: +90(123) 767-12-44 </p>
      <p><strong>{$t("email")}</strong>: info@example.com </p>
      <p><strong>{$t("gsm")}</strong>: +90(555) 767-12-44 </p>

      <h2>{$t("follow-us")}</h2>
      <p>{$t("follow-us-text")}</p>
		</>
	);
};
