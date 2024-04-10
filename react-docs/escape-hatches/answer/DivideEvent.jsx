import { useState, useEffect } from "react";

//1번 문제 질문
//챌린지 1 of 4: 업데이트되지 않는 변수 고치기
// 아래의 Timer 컴포넌트에는 매초 증가하는 state 변수 count가 있습니다. 증가량은 state 변수 increment에 저장됩니다. 변수 increment는 더하기와 빼기 버튼으로 제어할 수 있습니다.
// 하지만 더하기 버튼을 아무리 많이 클릭해도 카운터는 여전히 매초 1씩 증가합니다. 이 코드는 무엇이 잘못되었을까요? Effect의 코드 내부에서 increment는 왜 항상 1일까요? 실수를 찾아 고쳐보세요.
export function Timer1() {
	const [count, setCount] = useState(0);
	const [increment, setIncrement] = useState(1);

	useEffect(() => {
		const id = setInterval(() => {
			setCount((c) => c + increment);
		}, 1000);
		return () => {
			clearInterval(id);
		};
	}, [increment]);

	return (
		<>
			<h1>
				카운터: {count}
				<button onClick={() => setCount(0)}>재설정</button>
			</h1>
			<hr />
			<p>
				초당 증가량:
				<button
					disabled={increment === 0}
					onClick={() => {
						setIncrement((i) => i - 1);
					}}
				>
					–
				</button>
				<b>{increment}</b>
				<button
					onClick={() => {
						setIncrement((i) => i + 1);
					}}
				>
					+
				</button>
			</p>
		</>
	);
}
