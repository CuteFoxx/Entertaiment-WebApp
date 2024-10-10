import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <main className="app">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
