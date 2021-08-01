import { useEffect } from "react";
import "../Profile/profile.css";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import Timeline from "../Timeline/timeline";

function Profile() {
  useEffect(() => {
    document.title = "WizardGram";
  }, []);

  return (
    <>
      <Header />
      <Timeline />
      <Sidebar />
    </>
  );
}

export default Profile;
