//문제1.챌린지 1 of 3: 실수 고치기
//아래 코드는 Objects are not valid as a React child라는 오류가 발생합니다.
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink"
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

//문제 2.챌린지 2 of 3: 정보를 객체로 추출하기
// 이미지 URL을 person 객체로 추출해 봅시다.
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  
//문제3.챌린지 3 of 3: JSX 중괄호 안에 표현식 작성하기 
// 아래 객체에서 전체 이미지 URL은 기본 URL, imageId, imageSize 및 파일 확장자 네 부분으로 나누어져 있습니다.
// 이미지 URL은 기본 URL (항상 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s') 및 파일 확장자 (항상 '.jpg')와 같은 어트리뷰트를 결합합니다. 그러나 <img> 태그가 src를 지정하는 방식에 문제가 있습니다.
// 어떻게 고칠 수 있을까요?
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
