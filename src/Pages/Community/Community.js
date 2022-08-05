import React from "react";
import { useNavigate } from "react-router-dom";

function Community() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  React.useEffect(() => {
    if (!accessToken) {
      navigate("/community/login");
      console.log("qwe");
    }
    if (accessToken) {
      navigate("/community/home");
      console.log("qwe");
    }
  }, [accessToken]);
  return false;
}

export default Community;
