import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="white">Open source</strong>
      </h1>
      <GitHubCalendar
        username="Shiva0krishna"
        blockSize={15}
        blockMargin={3}
        color="green"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
