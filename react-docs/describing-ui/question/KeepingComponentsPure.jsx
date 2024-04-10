//문제 1.챌린지 1 of 3: 고장난 시계를 고쳐보세요
// 이 컴포넌트는 자정부터 아침 6시까지의 시간에는 <h1>의 CSS 클래스를 "night"로 설정하고 그 외에 시간에는 "day"로 설정하려고 합니다. 하지만 이건 동작하지 않습니다. 이 컴포넌트를 고칠 수 있나요?

// 컴퓨터의 시간대를 일시적으로 변경하여 정답이 동작하는지 확인할 수 있습니다. 현재 시간이 자정에서 아침 6시 사이이면 시계의 색상이 반전되어야 합니다!

export default function Clock({ time }) {
    let hours = time.getHours();
    if (hours >= 0 && hours <= 6) {
      document.getElementById('time').className = 'night';
    } else {
      document.getElementById('time').className = 'day';
    }
    return (
      <h1 id="time">
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  
//문제 2. 챌린지 2 of 3: 망가진 프로필을 고쳐보세요 
// 두 개의 Profile 컴포넌트 서로 다른 데이터로 나란히 렌더링됩니다. 첫 번째 프로필에서 “Collapse”를 누른 다음 “Expand”를 누릅니다. 이제 두 프로필에 동일한 사람이 표시됩니다. 이것은 버그입니다.

// 버그의 원인을 찾아서 고치세요.

import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

let currentPerson;

export default function Profile({ person }) {
  currentPerson = person;
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  )
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}

//문제 3. 챌린지 3 of 3: 깨진 StoryTray를 수리해보세요 
// 회사의 CEO가 온라인 시계 앱에 “stories”를 추가해 달라고 요청했는데 거절할 수 없는 상황입니다. “Create Story” 플레이스홀더 뒤에 stories 목록을 받는 StoryTray컴포넌트를 작성했습니다.

// 프로퍼티로 받는 stories 배열 끝에 가짜 story를 하나 더 추가해서 “Create Story” 플레이스홀더를 구현했습니다. 하지만 어떤 이유에서인지 “Create Story”는 한 번 이상 등장합니다. 이 문제를 해결해보세요.

export default function StoryTray({ stories }) {
    stories.push({
      id: 'create',
      label: 'Create Story'
    });
  
    return (
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
  }
  