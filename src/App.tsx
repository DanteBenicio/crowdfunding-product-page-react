import { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import MainSection from './components/MainSection';
import { AppContext } from './context';
import ThanksModal from './components/ThanksModal';
import BackThisProjectModal from './components/BackThisProjectModal';
import Menu from './components/Menu';

function App() {
  const {
    showThanksModal, showBackThisProjectModal,
  } = useContext(AppContext);
  const [openBurger, setOpenBurger] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector('body');

    window.addEventListener('resize', (e) => {
      const { innerWidth } = e.target as Window;

      if (innerWidth >= 768) {
        setOpenBurger(false);
      }
    });

    if (showBackThisProjectModal) {
      body!.style.overflowY = 'hidden';
    } else {
      body!.style.overflowY = 'scroll';
    }

    return () => window.removeEventListener('resize', () => {});
  }, [showBackThisProjectModal]);

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
