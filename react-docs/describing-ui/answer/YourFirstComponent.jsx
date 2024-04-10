//첫 번째 컴포넌트
//정답 1.
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

//정답 2.
export function Profile2() {
  return (
    <img
      src="https://i.imgur.com/jA8hHMpm.jpg"
      alt="Katsuko Saruhashi"
    />
  );
}

//정답 3.
function Profile3() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//정답 4.
export function Congratulations() {
  return <h1>Good job!</h1>;
}
