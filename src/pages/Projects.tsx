import { useState } from 'react';
import '../css/Projects.css';

const Projects = () => {
  const [choice, SetChoice] = useState<number>(1);
  return (
    <>
    <div className="Projects">
      <div className='Buttons'>
        {(
          choice==1 ? 
          <div className='ButtonPressed' onClick={()=>SetChoice(1)}><h2>ButtonCardNews</h2></div> :
          <div className='Button' onClick={()=>SetChoice(1)}><h2>ButtonCardNews</h2></div>
        )}
        {(
          choice==2 ? 
          <div className='ButtonPressed' onClick={()=>SetChoice(2)}><h2>ButtonMainText</h2></div> :
          <div className='Button' onClick={()=>SetChoice(2)}><h2>ButtonMainText</h2></div>
        )}
        {(
          choice==3 ? 
          <div className='ButtonPressed' onClick={()=>SetChoice(3)}><h2>ButtonPostCard</h2></div> :
          <div className='Button' onClick={()=>SetChoice(3)}><h2>ButtonPostCard</h2></div>
        )
        }
      </div>
      {choice==1 ? 
      <div className='CardNews'>
        <div className='titleContainer'>
          <h1>Card News</h1>
        </div>
        <div className='contentContainer'>
          <div className='picContainer'>
            <div className='pic1' />
          </div>
          <div className='paraContainer'>
            <p>
            1. 데이터 분석 역량:AI 뉴스 컨텐츠 제작에서 데이터 분석 역할을 맡았습니다. 대량의 데이터를 수집하고 분석하여 트렌드와 독자 관심사를 파악하며, 이를 기반으로 뉴스 콘텐츠를 개발했습니다. 이 경험을 통해 데이터 분석 및 시각화 능력을 향상시키고, 중요 정보 식별 능력을 강화했습니다.
            </p>
            <p>
            2. 콘텐츠 생성 능력: 뉴스 콘텐츠의 생성과 품질 향상에도 참여했습니다. AI를 활용하여 자동 뉴스 기사 작성 프로세스를 개선하며, 콘텐츠의 창의성과 글쓰기 스킬을 향상시켰습니다.
            </p>
            <p>
            3. 기술 개발 및 혁신적 업무:AI 뉴스 컨텐츠 제작 과정에서 AI 모델의 개발과 향상, 그리고 사용자 경험 개선에 기여했습니다. 기술 개발 업무를 통해 AI 솔루션을 혁신하고, 사용자들에게 더 나은 서비스를 제공하는 방법을 학습하였습니다.
            </p>
            <p>
            이러한 경험을 통해 전문성을 향상하고, 여러 산업에서 AI 기술이 어떻게 변화를 가져오고 있는지 직접 체험하며, 다양한 도전에 대한 해결책을 찾는 능력을 기를 수 있었습니다.
            </p>
          </div>
        </div>
      </div>
      :
      (choice==2 ? 
      <>
        <h2>Main Text</h2>
      </>
      :
      <>
        <h2>Post Card</h2>
      </>)
      }
    </div>
    </>
  )
}

export default Projects;