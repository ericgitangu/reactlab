import React, { useState, useRef, useEffect } from 'react';
import './App.css';

/**
 * Main component for the calculator app.
 */
/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
	const inputRef = useRef(null);
	const resultRef = useRef(null);
	const [result, setResult] = useState(0);

	useEffect(() => {
		// @ts-ignore
		inputRef.current.value = '';
		console.log(`result changed to ${result}`);
	}, [result]);

	/**
	 * Function to handle addition operation.
	 * @param {Event} e - The event object.
	 */
	function plus(e) {
		e.preventDefault();
		// @ts-ignore
		setResult((result) => result + Number(inputRef.current?.value || 0));
	}

	/**
	 * Function to handle subtraction operation.
	 * @param {Event} e - The event object.
	 */
	function minus(e) {
		e.preventDefault();
		// @ts-ignore
		setResult((result) => result - Number(inputRef.current?.value || 0));
	}

	/**
	 * Function to handle multiplication operation.
	 * @param {Event} e - The event object.
	 */
	function times(e) {
		e.preventDefault();
		if (result === 0) {
			setResult(1);
		}
		// @ts-ignore
		setResult((result) => result * Number(inputRef.current?.value || 0));
	}

	/**
	 * Function to handle division operation.
	 * @param {Event} e - The event object.
	 */
	function divide(e) {
		e.preventDefault();
		try {
			// @ts-ignore
			setResult((result) => result / Number(inputRef.current?.value || 1));
		} catch (err) {
			console.error(err);
			setResult(0);
		}
	}

	/**
	 * Function to reset the input value to 0.
	 * @param {Event} e - The event object.
	 */
	function resetInput(e) {
		e.preventDefault();
		if (inputRef.current) {
			// @ts-ignore
			inputRef.current.value = '0';
		}
	}

	/**
	 * Function to reset the result value to 0.
	 * @param {Event} e - The event object.
	 */
	function resetResult(e) {
		e.preventDefault();
		setResult(0);
	}

	return (
		<div className='App'>
			<div>
				<h1>Simplest Working Calculator</h1>
			</div>
			<form>
				<p ref={resultRef}>
					{/* add the value of the current total */}
					Result: {result}
				</p>
				<input
					pattern='[0-9]'
					ref={inputRef}
					type='number'
					placeholder='Type a number'
				/>
				<button
					// @ts-ignore
					onClick={plus}>
					add
				</button>
				{/* Add the subtract button */}
				<button
					// @ts-ignore
					onClick={minus}>
					subtract
				</button>
				{/* Add the multiply button */}
				<button
					// @ts-ignore
					onClick={times}>
					multiply
				</button>
				{/* Add the divide button */}
				<button
					// @ts-ignore
					onClick={divide}>
					divide
				</button>
				{/* Add the resetInput button */}
				<button
					// @ts-ignore
					onClick={resetInput}>
					reset input
				</button>
				{/* Add the resetResult button */}
				<button
					// @ts-ignore
					onClick={resetResult}>
					reset result
				</button>
			</form>
		</div>
	);
}

export default App;
