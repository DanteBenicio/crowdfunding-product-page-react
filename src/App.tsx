import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import MainSection from './components/MainSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <FirstSection />
      <MainSection />
    </>
  );
}

export default App
