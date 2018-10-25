import * as React from "react";
import { Card, Row, Input, Text } from "./components";
import ThemeContext from "./ThemeContext";

class Greeting extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      name: "Harry",
      sureName: "Potter",
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleResize);
  }

  render() {
    let { name, sureName, width } = this.state;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Card theme={theme}>
            <Row label="Name">
              <Input value={name} onChange={this._handleNameChange} />
            </Row>
            <Row label="Surename">
              <Input value={sureName} onChange={this._handleSureNameChange} />
            </Row>
            <Row label="Width">
              <Text>{width}</Text>
            </Row>
          </Card>
        )}
      </ThemeContext.Consumer>
    );
  }

  _handleNameChange = name => {
    this.setState({ name });
  };

  _handleSureNameChange = sureName => {
    this.setState({ sureName });
  };

  _handleResize = () => {
    this.setState({ width: window.innerWidth });
  };
}

export default Greeting;
