import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import styles from './ProtectedRoute.module.scss';
// import { useAppSelector } from '@/redux/store';
// import { authSelector } from '@/redux/slices/authSlice';

export default function ProtectedRoute() {
  // const { isAuth } = useAppSelector(authSelector);
  const isAuth = true;
  const location = useLocation();
  return isAuth ? (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.layout}>
        <Header />
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate state={{ from: location }} to="/login" replace />
  );
}
