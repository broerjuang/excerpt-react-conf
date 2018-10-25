import React, { useState, useContext, useEffect } from "react";
import { Card, Row, Input, Text } from "./components";
import ThemeContext from "./ThemeContext";

function Greeting(props) {
  let [name, setName] = useState("Harry");
  let [sureName, setSureName] = useState("Potter");
  let theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = name + " " + sureName;
  });

  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let handleNameChange = name => {
    setName(name);
  };

  let handleSureNameChange = sureName => {
    setSureName(sureName);
  };

  return (
    <Card theme={theme}>
      <Row label="Name">
        <Input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surename">
        <Input value={sureName} onChange={handleSureNameChange} />
      </Row>
      <Row label="Width">
        <Text>{width}</Text>
      </Row>
    </Card>
  );
}

export default Greeting;
