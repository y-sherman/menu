import { Outlet } from "react-router-dom";
import './Layout.css';
import SiteHeader from "./siteHeader";

export default function Layout(){
  return (
    <>
      <SiteHeader/>
      <Outlet />
    </>
  )
};

