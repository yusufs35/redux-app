import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { TfiMinus, TfiPlus, TfiReload } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "../store/slices/counter-slice";

export const Counter = () => {
	const counterValue = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<ButtonGroup aria-label="Basic example" className="m-4" size="lg">
			<Button variant="secondary" onClick={() => dispatch(down())}>
				<TfiMinus />
			</Button>
			<Button variant="secondary" disabled>
				{counterValue}
			</Button>
			<Button variant="secondary" onClick={() => dispatch(up())}>
				<TfiPlus />
			</Button>
			<Button variant="secondary" onClick={() => dispatch(reset())}>
				<TfiReload />
			</Button>
		</ButtonGroup>
	);
};
