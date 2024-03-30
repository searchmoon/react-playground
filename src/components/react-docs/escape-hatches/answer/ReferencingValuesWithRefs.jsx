import { useState, useRef } from "react";

// 정답 1.
export default function Chat() {
	const [text, setText] = useState("");
	const [isSending, setIsSending] = useState(false);
	const timeoutRef = useRef(null);

	function handleSend() {
		setIsSending(true);
		timeoutRef.current = setTimeout(() => {
			alert("Sent!");
			setIsSending(false);
		}, 3000);
	}

	function handleUndo() {
		setIsSending(false);
		clearTimeout(timeoutRef.current);
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

// 정답 2.

export function Toggle() {
	const [isOn, setIsOn] = useState(false);

	return (
		<button
			onClick={() => {
				setIsOn(!isOn);
			}}
		>
			{isOn ? "On" : "Off"}
		</button>
	);
}

// 정답 3.

function DebouncedButton({ onClick, children }) {
	const timeoutRef = useRef(null);
	return (
		<button
			onClick={() => {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = setTimeout(() => {
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

// 정답 4.
// import { useState, useRef } from 'react';

export function Chating() {
	const [text, setText] = useState("");
	const textRef = useRef(text);

	function handleChange(e) {
		setText(e.target.value);
		textRef.current = e.target.value;
	}

	function handleSend() {
		setTimeout(() => {
			alert("Sending: " + textRef.current);
		}, 3000);
	}

	return (
		<>
			<input value={text} onChange={handleChange} />
			<button onClick={handleSend}>Send</button>
		</>
	);
}
