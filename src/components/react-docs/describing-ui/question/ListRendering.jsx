// 문제 1. 챌린지 1 of 4: 리스트를 둘로 나누기 
// 예시는 모든 사람의 리스트를 보여줍니다.

// 두 개의 개별 리스트 Chemists와 Everyone Else을 차례로 표시하도록 변경하세요. 이전과 마찬가지로 person.profession === 'chemist'를 확인하여 어떤 사람이 chemist인지 확인할 수 있습니다.

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

//문제 2.
// 챌린지 2 of 4: 하나의 컴포넌트에 중첩된 리스트 
// 이 배열에서 레시피 리스트를 만들어 보세요! 배열의 각 레시피에 대해 이름을 <h2>로 표시하고 재료를 <ul>에 나열합니다.

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
}

//문제 3.챌린지 3 of 4: 리스트 항목 컴포넌트 추출하기 
// RecipeList 컴포넌트에는 두 개의 중첩된 map 호출이 포함되어 있습니다. 이를 단순화하기 위해 id, name, ingredients props를 허용하는 Recipe 컴포넌트를 추출합니다. 외부 key를 어디에 위치하고 그 이유는 무엇일까요?

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

//문제 4. 챌린지 4 of 4: 구분 기호가 있는 리스트 
// 이 예제는 Tachibana Hokushi 의 유명한 하이쿠(일본의 정형시)를 렌더링하며, 각 행은 <p> 태그로 래핑되어 있습니다. 여러분이 해야 할 일은 각 단락 사이에 <hr /> 구분 기호를 삽입하는 것입니다. 결과 구조는 다음과 같아야 합니다.

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <p key={index}>
          {line}
        </p>
      )}
    </article>
  );
}
