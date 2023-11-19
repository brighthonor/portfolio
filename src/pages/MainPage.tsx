import '../css/MainPage.css';
import Dooyong from './Dooyong';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';

const MainPage = () => {
  return (
    <>
    <div className='MainPage'>
      <Dooyong />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
    </>
  )
}

export default MainPage;