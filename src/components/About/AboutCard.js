import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view" style={{marginRight:"10%"}}>
      <Card.Body>
        <blockquote className="blockquote">
          <p style={{ textAlign: "justify" }}>
            <br/><br/>
            Hi Everyone, I am <span className="purple">Shiva krishna sangati </span>
            from <span className="purple"> Andhra pradesh,India.</span><br/>
            I am currently pursuing a B.Tech in Computer Science with a specialization in Software Engineering at SRM Institute of Science and Technology, KTR.
            <br />
            A passionate <span className="purple">Full-stack developer </span> seeking a challenging role to enhance my skills
and contribute to the company's growth through personal and professional
development.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
