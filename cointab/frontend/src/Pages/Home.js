import { Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("loginuser")) || {};
  const logout = () => {
    localStorage.setItem("loginuser", JSON.stringify({}));
    window.location.reload();
    alert("successfully logout");
  };

  return (
    <>
      <Heading>
        email_Id:<Text>{user && user?.user.email}</Text>
      </Heading>
      {user && <Button onClick={logout}>LOGOUT</Button>}
    </>
  );
}

export default Home;
