import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import Timeline from "../Timeline/timeline";
import * as ROUTES from "../../constants/routes";
import "../Profile/profile.css";

function Profile() {
  // const history = useHistory();

  // history.push(ROUTES.LOGIN);
  useEffect(() => {
    document.title = "WizardGram";
  }, []);

  // if (localStorage === undefined) {
  //   // history.push(ROUTES.LOGIN);
  // }

  return (
    <>
      <Header />
      <Timeline />
      <Sidebar />
    </>
  );
}

export default Profile;
