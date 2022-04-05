import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import MainSection from './components/MainSection';
import { AppContext } from './context';
import ThanksModal from './components/ThanksModal';
import BackThisProjectModal from './components/BackThisProjectModal';
import Menu from './components/Menu';

function App() {
  return (
    <>
      {showThanksModal && <ThanksModal />}
      {showBackThisProjectModal && <BackThisProjectModal />}
      {openBurger && <Menu />}
      <Navbar openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <FirstSection />
      <MainSection />
    </>
  );
}

export default App;
