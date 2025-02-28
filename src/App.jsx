import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader'; // Make sure Loader is a functional component

export default function App() {
  const location = useLocation(); // Use useLocation to track the current route
  console.log(location)

  return (
    <div className="bg-black">
      <Header />
      <main className="max-w-[1200px] mx-auto ">
        {/* Wrap Outlet with Suspense and use location.pathname as the key */}
        <Suspense fallback={<Loader />} key={location.pathname}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
