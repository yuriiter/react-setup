import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Outlet />
    </div>
  );
};
