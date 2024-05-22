import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsPage from './pages/ThreadsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import CreateThreadPage from './pages/CreateThreadPage';
import LeaderboardsPage from './pages/LeaderBoardsPage';
import Layout from './components/Layout';
import { asyncPreload } from './redux/preload/action';
import GuestRoute from './wrapper/GuestRoute';
import ProtectedRoute from './wrapper/ProtectedRoute';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import { asyncGetAllTags } from './redux/tags/action';
import { asyncGetLeaderboards } from './redux/leaderboards/action';

function App() {
  const dispacth = useDispatch();
  const preload = useSelector((state) => state.preload);
  useEffect(() => {
    dispacth(asyncGetAllTags());
    dispacth(asyncGetLeaderboards());
  }, []);
  useEffect(() => {
    dispacth(asyncPreload());
  }, [dispacth]);

  if (preload) {
    return null;
  }

  return (
    <>
      <Loading />
      <Routes>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<ThreadsPage />} />
            <Route path="threads/:id" element={<ThreadDetailPage />} />
            <Route path="threads/leaderboards" element={<LeaderboardsPage />} />
            <Route path="threads/create" element={<CreateThreadPage />} />
          </Route>
        </Route>

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
