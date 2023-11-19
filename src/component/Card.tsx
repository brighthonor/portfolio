import '../css/Card.css';

type CardProp = {
  name: string;
}

const Card = (prop: CardProp) => {
  return (
    <>
      <div className="Card" key={prop.name}>
        {
          prop.name=='introduction' ? 
          <>
            <h1>Introduction
            </h1>
            <p>
              컴퓨터공학과와 토목공학과를 복수전공한 학생입니다. Ai Dalpha에서 AI 관련 트렌드에 관한 컴텐츠 제작을 주도하며, 이를 통해 다양한 경험과 역량을 쌓아왔습니다. 이 포트폴리오를 통해 제 경험, 역량, 그리고 제가 취업을 통해 제공할 수 있는 가치에 대해 소개하고자 합니다.
            </p>
            <h1>-</h1>
            <h2>01 도전</h2>
            <p>
              현재는 학문적인 역량을 지속적으로 향상시키며, 현장 경험을 통해 실무 능력을 발전시키는 데 중점을 두고 있습니다.
            </p>
            <h2>02 기여</h2>
            <p>
              AI와 데이터 과학분야에서 혁신적인 솔루션을 개발하고, 문제 해결을 통해 기술의 발전에 기여하고자 합니다.
            </p>
            <h2>03 성장</h2>
            <p>
              세계적인 리더로 성장하여, 기술을 통해 사회와 비즈니스에 가치를 제공하고자 합니다.
            </p>
          </>
          :
          (prop.name=='information' ? 
          <>
            <div id='infoouter'>
              <h1>Information
              </h1>
              <div id='information'>
                <h3>Name</h3> <p>김두용 Dooyong Kim</p>
                <h3>Birth</h3> <p>1999. 02. 28</p>
                <h3>Address</h3> <p>서울시 강남구 청담동 도산대로 96길 39</p>
                <h3>Email</h3> <p>tonydia12@naver.com</p>
                <h3>Mobile</h3> <p>010-5068-8761</p>
                <h3>Major</h3> <p>Computer Science / Civil Engineering</p>
              </div>
            </div>
          </>
          :
          <>
            <h1>Timeline
            </h1>
            <div id='timeline'>
              <pre>
              <ul>
                <li><p>2012.</p>    청담중학교 입학</li>
                <li><p>2015.</p>    영동고등학교 입학</li>
                <li><p>2019.</p>    가천대학교 입학</li>
                <li><p>2023.</p>    AI DALPHA : 컨텐츠 개발팀</li>
                <li><p>2023.</p>    AI DALPHA : 라벨링 팀장</li>
              </ul>
              </pre>
            </div>
          </>)
        }
      </div>
    </>
  )
}

export default Card;