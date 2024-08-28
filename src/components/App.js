import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SharedLayout } from './SharedLayout';
import { About } from '../pages/About';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />}></Route>
          <Route path="team" element={<Team />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
