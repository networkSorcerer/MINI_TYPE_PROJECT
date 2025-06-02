import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SearchWithKeywordPage from "./pages/SearchPage/SearchWithKeywordPage";
import PlaylistDetailPage from "./pages/PlaylistPage/PlaylistDetailPage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import LoadingScreen from "./common/components/LoadingScreen";

const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage/HopePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
// 0. 사이드바 있어야 함 (플레이리스트, 메뉴뉴)
// 1. 홈페이지 /
// 2. 서치페이지 /search
// 3. 서치 결과 페이지 /search/:keyword
// 4. 플레이리스트 디테일 페이지 /playlist/:id
// 5. 모바일 버전 플레이리스트 보여주는 페이지 /playlist

function App() {
  return (
    <Suspense fallback={<LoadingScreen/>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route
            path="search/:keyword"
            element={<SearchWithKeywordPage />}
          ></Route>
          <Route path="playlist/:id" element={<PlaylistDetailPage />}></Route>
          <Route path="playlist" element={<PlaylistPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
