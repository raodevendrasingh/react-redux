import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectNotifiCount } from "./store/counter/counter.selector";
import { increment, reset } from "./store/counter/counter.slice";

function App() {

    const count = useSelector(selectNotifiCount)
    const dispatch = useDispatch();

	return (
		<>
			<h1>Count</h1>
			{count}
			<div className="card">
				<button onClick={() => {
                    dispatch(increment())
                } }>
					Increment
				</button>
				<button onClick={() =>{
                    dispatch(reset())
                } }>Reset</button>
			</div>
		</>
	);
}

export default App;
