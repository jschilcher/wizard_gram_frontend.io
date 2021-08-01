import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import axios from "axios";

function Posts() {
  const [postData, setPostData] = useState();
  const userpost = JSON.parse(localStorage.getItem("specificPost"));
  const history = useHistory();
  let specificPost;

  let breakdown = "There is no user";
  if (userpost) {
    breakdown = userpost[0].imag;
  }

  useEffect(() => {
    document.title = "Posts - WizardGram";
  }, []);

//   useEffect(() => {
//     fetchAllPosts();
//   }, []);

//   useEffect(() => {
//     test();
//   }, []);

//   const fetchAllPosts = async (event) => {
//     await axios
//       .get("http://localhost:5000/api/collections/post")
//       .then((response) => {
//         setPostData(response.data);
//       });
//   };

//   const test = async () => {
//     try {
//       specificPost = postData.filter(function (el) {
//         return email === el.email;
//       });
//       localStorage.setItem("specificPost", JSON.stringify(specificPost));
//       setPostData(specificPost);
//       history.push(ROUTES.PROFILE);
//     } catch {
//       localStorage.removeItem(postData);
//       setPostData(null);
//       console.log("HandleSubmit has failed");
//     }
//   };

  return (
    <div>
      <div className="profile-image">
        {/* <img src={`${breakdown}`} alt="" /> */}
      </div>
    </div>
  );
}

export default Posts;
