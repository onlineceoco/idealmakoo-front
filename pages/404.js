import Drawer from "../components/Drawer/Drawer";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export default function Custom404() {
  return (
    <div style={{width:'100vw', height:'100vh', backgroundColor:'lightblue'}}>
      <Drawer />
      <ErrorPage />
    </div>
  );
}
