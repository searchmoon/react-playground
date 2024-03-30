import { useState, useRef } from "react";

// 문제 1.
export function Chat() {
	const [text, setText] = useState("");
	const [isSending, setIsSending] = useState(false);
	let timeoutID = null;

	function handleSend() {
		setIsSending(true);
		timeoutID = setTimeout(() => {
			alert("Sent!");
			setIsSending(false);
		}, 3000);
	}

	function handleUndo() {
		setIsSending(false);
		clearTimeout(timeoutID);
	}

	return (
		<>
			<input disabled={isSending} value={text} onChange={(e) => setText(e.target.value)} />
			<button disabled={isSending} onClick={handleSend}>
				{isSending ? "Sending..." : "Send"}
			</button>
			{isSending && <button onClick={handleUndo}>Undo</button>}
		</>
	);
}

// 문제 2.
export function Toggle() {
	const isOnRef = useRef(false);

	return (
		<button
			onClick={() => {
				isOnRef.current = !isOnRef.current;
			}}
		>
			{isOnRef.current ? "On" : "Off"}
		</button>
	);
}

// 문제 3.
// import { useState } from "react";

let timeoutID;

function DebouncedButton({ onClick, children }) {
	return (
		<button
			onClick={() => {
				clearTimeout(timeoutID);
				timeoutID = setTimeout(() => {
					onClick();
				}, 1000);
			}}
		>
			{children}
		</button>
	);
}

export function Dashboard() {
	return (
		<>
			<DebouncedButton onClick={() => alert("Spaceship launched!")}>
				Launch the spaceship
			</DebouncedButton>
			<DebouncedButton onClick={() => alert("Soup boiled!")}>Boil the soup</DebouncedButton>
			<DebouncedButton onClick={() => alert("Lullaby sung!")}>Sing a lullaby</DebouncedButton>
		</>
	);
}

// 문제 4.
// import { useState, useRef } from "react";

export function Chating() {
	const [text, setText] = useState("");

	function handleSend() {
		setTimeout(() => {
			alert("Sending: " + text);
		}, 3000);
	}

	return (
		<>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={handleSend}>Send</button>
		</>
	);
}
