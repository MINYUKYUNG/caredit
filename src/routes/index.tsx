import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Solution, NotFound } from '../pages';

function RouterView() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Solution />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterView;
