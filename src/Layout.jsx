import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  

  return (
    <div>
      
      <main className='h-screen'>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;