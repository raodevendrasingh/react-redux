import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectCount } from "./state/counter/counterSelector";
import { increment, reset, decrement, incrementByAmount, incrementAsync } from "./state/counter/counterSlice";
import { AppDispatch } from "./state/store";

function App() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<h1>Count: {count}</h1>
			<div className="card">
				<button
					onClick={() => {
						dispatch(increment());
					}}
				>
					Increment
				</button>
				<button
					onClick={() => {
						dispatch(reset());
					}}
				>
					Reset
				</button>

				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					Decrement
				</button>
				<button
					onClick={() => {
						dispatch(incrementByAmount(10));
					}}
				>
					Increment by Amount
				</button>
				<button
					onClick={() => {
						dispatch(incrementAsync(10));
					}}
				>
					Increment Asynchronous
				</button>
			</div>
		</>
	);
}

export default App;
