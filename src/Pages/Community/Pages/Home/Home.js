import React from "react";

function Home() {
  return (
    <div>
      Home
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        log out
      </button>
    </div>
  );
}

export default Home;
