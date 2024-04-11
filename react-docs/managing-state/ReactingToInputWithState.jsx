//문제1.챌린지 1 of 3: CSS class를 추가하고 제거하기 
// 사진을 클릭하면 바깥에 있는 <div>의 background--active CSS class를 제거하고 <img>에 picture--active class를 추가합니다. 그리고 배경을 다시 클릭하면 원래 CSS class로 돌아와야 합니다.
// 화면상으로는 사진을 클릭하면 보라색 배경은 제거되고 사진의 테두리는 강조 표시됩니다. 사진 외부를 클릭하면 배경이 강조 표시되고 사진의 테두리 강조 표시는 제거됩니다.
export default function Picture() {
    return (
      <div className="background background--active">
        <img
          className="picture"
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    );
  }
  
  //정답1.
  import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }
  
  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}

//문제 2.챌린지 2 of 3: 프로필 편집기 
// 아래는 순수 자바스크립트만으로 작성된 짧은 코드입니다. 동작을 이해하기 위해 살펴봅시다.
function handleFormSubmit(e) {
    e.preventDefault();
    if (button.textContent === 'Edit Profile') {
      button.textContent = 'Save Profile';
      hide(firstNameText);
      hide(lastNameText);
      show(firstNameInput);
      show(lastNameInput);
    } else {
      button.textContent = 'Edit Profile';
      hide(firstNameInput);
      hide(lastNameInput);
      show(firstNameText);
      show(lastNameText);
    }
  }
  
  function handleFirstNameChange() {
    firstNameText.textContent = firstNameInput.value;
    helloText.textContent = (
      'Hello ' +
      firstNameInput.value + ' ' +
      lastNameInput.value + '!'
    );
  }
  
  function handleLastNameChange() {
    lastNameText.textContent = lastNameInput.value;
    helloText.textContent = (
      'Hello ' +
      firstNameInput.value + ' ' +
      lastNameInput.value + '!'
    );
  }
  
  function hide(el) {
    el.style.display = 'none';
  }
  
  function show(el) {
    el.style.display = '';
  }
  
  let form = document.getElementById('form');
  let profile = document.getElementById('profile');
  let editButton = document.getElementById('editButton');
  let firstNameInput = document.getElementById('firstNameInput');
  let firstNameText = document.getElementById('firstNameText');
  let lastNameInput = document.getElementById('lastNameInput');
  let helloText = document.getElementById('helloText');
  form.onsubmit = handleFormSubmit;
  firstNameInput.oninput = handleFirstNameChange;
  lastNameInput.oninput = handleLastNameChange;
  
  //정답2.
  export default function EditProfile() {
    return (
      <form>
        <label>
          First name:{' '}
          <b>Jane</b>
          <input />
        </label>
        <label>
          Last name:{' '}
          <b>Jacobs</b>
          <input />
        </label>
        <button type="submit">
          Edit Profile
        </button>
        <p><i>Hello, Jane Jacobs!</i></p>
      </form>
    );
  }
  
//문제 3.챌린지 3 of 3: 명령형 코드를 리액트 없이 리팩토링하기 
// 여기 리액트 없이 명령형으로 작성된 챌린지 이전의 코드가 있습니다.
// 리액트가 없다고 상상해보세요. 이 로직을 조금 더 견고하고 리액트와 비슷하게 리팩토링할 수 있을까요? 리액트에서처럼 state를 명시적으로 표현하면 어떻게 보일까요?
// 어디서부터 시작해야할지 고민 중이라면 아래에 구조를 미리 만들어 두었습니다. 아래 구조에서 시작한다면 비어있는 updateDOM 함수 로직을 작성해보세요. (필요에 따라 원래 코드를 참조하시면 됩니다.)
function handleFormSubmit(e) {
    e.preventDefault();
    if (button.textContent === 'Edit Profile') {
      button.textContent = 'Save Profile';
      hide(firstNameText);
      hide(lastNameText);
      show(firstNameInput);
      show(lastNameInput);
    } else {
      button.textContent = 'Edit Profile';
      hide(firstNameInput);
      hide(lastNameInput);
      show(firstNameText);
      show(lastNameText);
    }
  }
  
  function handleFirstNameChange() {
    firstNameText.textContent = firstNameInput.value;
    helloText.textContent = (
      'Hello ' +
      firstNameInput.value + ' ' +
      lastNameInput.value + '!'
    );
  }
  
  function handleLastNameChange() {
    lastNameText.textContent = lastNameInput.value;
    helloText.textContent = (
      'Hello ' +
      firstNameInput.value + ' ' +
      lastNameInput.value + '!'
    );
  }
  
  function hide(el) {
    el.style.display = 'none';
  }
  
  function show(el) {
    el.style.display = '';
  }
  
  let form = document.getElementById('form');
  let profile = document.getElementById('profile');
  let editButton = document.getElementById('editButton');
  let firstNameInput = document.getElementById('firstNameInput');
  let firstNameText = document.getElementById('firstNameText');
  let lastNameInput = document.getElementById('lastNameInput');
  let helloText = document.getElementById('helloText');
  form.onsubmit = handleFormSubmit;
  firstNameInput.oninput = handleFirstNameChange;
  lastNameInput.oninput = handleLastNameChange;
  
  //정답3.
  let firstName = 'Jane';
let lastName = 'Jacobs';
let isEditing = false;

function handleFormSubmit(e) {
  e.preventDefault();
  setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
  setFirstName(e.target.value);
}

function handleLastNameChange(e) {
  setLastName(e.target.value);
}

function setFirstName(value) {
  firstName = value;
  updateDOM();
}

function setLastName(value) {
  lastName = value;
  updateDOM();
}

function setIsEditing(value) {
  isEditing = value;
  updateDOM();
}

function updateDOM() {
  if (isEditing) {
    button.textContent = 'Save Profile';
    // TODO: 인풋을 보여주고 텍스트는 숨깁니다.
  } else {
    button.textContent = 'Edit Profile';
    // TODO: 인풋을 숨기고 텍스트를 보여줍니다.
  }
  // TODO: 텍스트 라벨을 업데이트합니다.
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

let form = document.getElementById('form');
let profile = document.getElementById('profile');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
