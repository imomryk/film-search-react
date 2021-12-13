import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import WatchListPage from "./components/WatchListPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/watchlist' element={<WatchListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
