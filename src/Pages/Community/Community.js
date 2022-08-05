import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CommunityLogin from "./CommunityLogin";

function Community() {
  const [state, setState] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setState(<Home />);
    }
    if (!accessToken) {
      setState(<CommunityLogin />);
    }
  }, []);
  return state;
}

export default Community;
