import React from "react";
import { Dropdown } from "react-bootstrap";
import { langs, setCurrentLang } from "../helpers/locale-helper";
import { useSelector } from "react-redux";

export const LangSwitcher = () => {
	const currentLang = useSelector((state) => state.locale.lang);

	return (
		<Dropdown>
			<Dropdown.Toggle variant="danger">
				<span className={`fi fi-${currentLang.countryCode}`}></span>{" "}
				{currentLang.title}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{langs.map((item) => (
					<Dropdown.Item
						key={item.code}
						onClick={() => setCurrentLang(item)}
					>
						<span className={`fi fi-${item.countryCode}`}></span>{" "}
						{item.title}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};
