import Card from '../component/Card';
import '../css/AboutMe.css';

const AboutMe = () => {
  return (
    <div className='AboutMe'>
      <Card name="introduction" key="introduction"/>
      <Card name="information" key="information"/>
      <Card name="timeline" key="timeline"/>
    </div>
  )
}

export default AboutMe;