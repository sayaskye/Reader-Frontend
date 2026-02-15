import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* <Navbar /> */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};
