//문제 1. 챌린지 1 of 4: 마운트시 input 필드에 포커스하기 
// 이 예시에서는 form이 <MyInput /> 컴포넌트를 렌더링합니다.
// 화면에 나타날 때 MyInput이 자동으로 포커스되도록 입력의 focus() 메서드를 사용하세요. 이미 주석 처리된 구현이 있지만 제대로 작동하지 않습니다. 왜 작동하지 않는지 확인하고 수정해 보세요. (autoFocus 속성은 존재하지 않는 것으로 가정하세요. 우리는 처음부터 동일한 기능을 다시 구현하고 있습니다.)
import { useEffect, useRef } from 'react';

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  // TODO: 작동하지 않는다. 고쳐야함
  // ref.current.focus()    

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

//정답 1.
import { useEffect, useRef } from 'react';

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

//문제 2.챌린지 2 of 4: 조건부로 input 필드에 포커스하기 
// 이 form은 두 개의 <MyInput /> 컴포넌트를 렌더링합니다.
// ”form 보기”를 누르면 두 번째 필드가 자동으로 포커스됩니다. 이는 두 <MyInput /> 컴포넌트 모두 내부의 필드에 포커스를 주려고 하기 때문입니다. 두 개의 입력 필드에 연속해서 focus()를 호출하면 마지막 호출이 항상 “승리하게” 됩니다.
// 이제 첫 번째 필드에 포커스를 주려면 첫 번째 MyInput 컴포넌트가 true로 설정된 shouldFocus prop을 받도록 변경해야 합니다. 변경된 로직에 따라 MyInput이 받은 shouldFocus prop이 true일 때에만 focus()가 호출되도록 변경해 보세요.

import { useEffect, useRef } from 'react';

export default function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  // TODO: shouldFocus가 true일때만 호출되도록
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

//정답2.
import { useEffect, useRef } from 'react';

export default function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

//문제 3.챌린지 3 of 4: 두 번 실행되는 interval 고치기 
// 아래 ‘Counter’ 컴포넌트는 매 초마다 증가하는 카운터를 나타냅니다. 컴포넌트가 마운트될 때 setInterval을 호출합니다. 이로 인해 ‘onTick’ 함수가 매 초마다 실행됩니다. ‘onTick’ 함수는 카운터를 증가시킵니다.
// 하지만 1초마다 한 번씩 증가하는 대신 두 번씩 증가합니다. 왜 그럴까요? 버그의 원인을 찾아 수정하세요

import { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      function onTick() {
        setCount(c => c + 1);
      }
  
      setInterval(onTick, 1000);
    }, []);
  
    return <h1>{count}</h1>;
  }
  
//정답 3.
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    const intervalId = setInterval(onTick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h1>{count}</h1>;
}

//문제 4.챌린지 4 of 4: Effect 내부에서의 잘못된 데이터 페칭 고치기 
// 이 컴포넌트는 select 태그로 선택한 사람의 일대기를 보여줍니다. 이 컴포넌트는 선택된 person이 변경될 때마다, 또한 마운트될 때마다 비동기 함수 fetchBio(person)를 호출하여 일대기를 불러옵니다. 이 비동기 함수는 Promise를 반환하며, 이 Promise는 결국 문자열로 resolve됩니다. 불러오기가 완료되면 setBio를 호출하여 해당 문자열을 select의 option으로 표시합니다.

import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    setBio(null);
    fetchBio(person).then(result => {
      setBio(result);
    });
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}

//정답 4.
import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    }
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}
