import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListAds from './pages/ListAds';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games/:id/ads" element={<ListAds />} />
    </Routes>
  );
}
