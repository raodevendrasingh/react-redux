import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectCount } from "./state/counter/counterSelector";
import { increment, reset, decrement, incrementByAmount } from "./state/counter/counterSlice";

function App() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

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
			</div>
		</>
	);
}

export default App;
