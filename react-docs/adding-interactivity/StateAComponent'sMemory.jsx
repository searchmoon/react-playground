//문제 1. 챌린지 1 of 4: 갤러리 완성하기
// 마지막 조각상에서 “Next”를 누르면 코드가 충돌합니다. 로직을 수정하여 이를 해결하세요. 이벤트 핸들러에 추가로 로직을 추가하거나 동작이 불가능할 때 버튼을 비활성화하여 이를 처리할 수 있습니다.
// 충돌을 수정한 후, 이전 조각상을 표시하는 “Previous” 버튼을 추가하세요. 첫 번째 조각상에서는 충돌이 발생하지 않아야 합니다.

import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

//정답 1.
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        disabled={!hasNext}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}

//문제 2. 챌린지 2 of 4: 폼 입력 불가 문제 고치기 
// 입력 필드에 입력하면 아무것도 나타나지 않습니다. 마치 입력값이 빈 문자열로 “고정”된 것처럼 보입니다. 첫 번째 <input>의 value는 항상 firstName 변수와 일치하도록 설정되어 있으며, 두 번째 <input>의 value는 항상 lastName 변수와 일치하도록 설정되어 있습니다. 이 부분은 맞습니다. 두 입력 모두 onChange 이벤트 핸들러를 가지고 있으며, 최신 사용자 입력(e.target.value)을 기반으로 변수를 업데이트하려고 시도합니다. 그러나 변수들은 다시 렌더링 되는 동안 값을 “기억”하지 않는 것처럼 보입니다. state 변수를 사용하여 이 문제를 해결하세요.

import {useState} from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

//정답 2.
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

//문제 3.챌린지 3 of 4: 충돌 고치기 
// 사용자가 피드백을 남길 수 있는 간단한 폼이 있는데, 피드백을 제출하면 감사 메시지가 표시되어야 합니다. 그러나 “예상보다 적은 훅을 렌더링했습니다”라는 오류 메시지와 함께 충돌이 발생합니다. 실수를 발견하고 고칠 수 있나요?
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

//3. 정답
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

//문제 4. 챌린지 4 of 4: 불필요한 state 제거하기 
// 이 예제에서 버튼이 클릭 되면 사용자의 이름을 요청하고 그런 다음 환영 메시지를 표시해야 합니다. 이름을 유지하기 위해 state를 사용하려고 했지만, 어떤 이유로 항상 “Hello, !”라고 표시됩니다.
// 이 코드를 수정하려면 불필요한 state 변수를 제거하세요. (왜 이것이 작동하지 않는지에 대해서는 나중에 설명하겠습니다.)
// 이 state 변수가 불필요한 이유를 설명할 수 있을까요?

import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');

  function handleClick() {
    setName(prompt('What is your name?'));
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}

//정답 4. 이런경우에는 state 를 사용할 필요가 없다. state 를 사용하지 않아야 할 곳을 잘 알기.
export default function FeedbackForm() {
    function handleClick() {
      const name = prompt('What is your name?');
      alert(`Hello, ${name}!`);
    }
  
    return (
      <button onClick={handleClick}>
        Greet
      </button>
    );
  }
//   컴포넌트가 다시 렌더링 될 때만 정보를 유지하기 위해 state 변수가 필요합니다. 
//   단일 이벤트 핸들러 내에서는 일반 변수가 잘 작동합니다. 일반 변수가 잘 동작할 때 state 변수를 도입하지 마세요.
