//문제 1.챌린지 1 of 3: 컴포넌트 추출하기
// 이  Gallery 컴포넌트에는 두 가지 프로필에 대한 몇 가지 비슷한 마크업이 포함되어 있습니다. 중복을 줄이기 위해 Profile 컴포넌트를 추출해 보세요. 어떤 props를 전달할지 골라야 할 수 있습니다.

export function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl("szV5sdG")}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl("YfeOqp2")}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

//문제 2.
// 챌린지 2 of 3: prop에 따라 이미지 크기 조정하기
// 이번 예제에서는 Avatar 가 <img>의 넓이와 높이를 결정하는 숫자 size prop를 받습니다. size prop은 40으로 설정되어 있습니다. 그러나 새 탭에서 이미지를 열면, 이미지가 160픽셀로 커져 있을 것입니다. 실제 이미지 크기는 요청하는 썸네일 크기에 따라 결정됩니다.
// size prop에 따라 가장 가까운 이미지 크기를 요청하도록 Avatar 컴포넌트를 변경하세요. 특히 size 가 90보다 작으면 's'(”small”)을, 아니면 'b'(”big”)을 getImageUrl 함수에 전달하세요. size prop를 다른 값들을 전달해 보고, 아바타를 렌더링 하는지, 새 탭에서 이미지를 열어 변경사항이 제대로 반영되는지 확인해 보세요.

export function getImageUrl(person, size) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}

//문제3.
export default function Profile() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h1>Photo</h1>
            <img
              className="avatar"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h1>About</h1>
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
          </div>
        </div>
      </div>
    );
  }
  

