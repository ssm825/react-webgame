import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Router from './Router';

const Games = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/game/*" element={<Router />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Games;
