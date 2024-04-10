//첫 번째 컴포넌트
//문제 1. 챌린지 1 of 4: 컴포넌트 내보내기
//root 컴포넌트를 내보내지 않았기 때문에 이 샌드박스는 작동하지 않습니다.
function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

//문제 2. 챌린지 2 of 4: return문을 고치세요
// 이 return문에는 문제가 있습니다. 고칠 수 있나요?
export function Profile() {
  return;
  <img
    src="https://i.imgur.com/jA8hHMpm.jpg"
    alt="Katsuko Saruhashi"
  />;
}

//문제 3. 챌린지 3 of 4: 실수를 찾아내세요
//Profile 컴포넌트가 선언되고 사용되는 방식에 문제가 있습니다. 실수를 발견할 수 있을까요? (React가 컴포넌트를 일반 HTML 태그와 어떻게 구분하는지 기억해 보세요!)
function profile() {
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
      <profile />
      <profile />
      <profile />
    </section>
  );
}
//문제 4. 챌린지 4 of 4: 컴포넌트를 새로 작성해 보세요.
// 컴포넌트를 처음부터 작성해 보세요. 유효한 이름을 지정하고 마크업을 반환할 수 있습니다. 아이디어가 떠오르지 않는다면 <h1>Good job!</h1> 라고 표시하는 Congratulations 컴포넌트를 작성할 수 있습니다. export를 잊지 마세요!
