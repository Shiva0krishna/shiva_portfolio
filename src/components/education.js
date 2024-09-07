import React from 'react'
import { Card } from 'react-bootstrap'
import { Container,Row,Col } from 'react-bootstrap'


function Education() {
  return (
    <div>
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",color:"dodgerblue" }}>
              SRMIST -(09/2022 - present day )
            </h1>

            <Card className="quote-card-view" style={{marginLeft:"20%"}}>
                <Card.Body>
                    <blockquote className="blockquote">
                        <p style={{ textAlign: "justify" }}>
                          <br/><br/>
                          <strong>SRM Institute of Science and Technology</strong> ,KTR.<br/>
09/2022 - present<br/> day CGPA : 9.7
                          <br/><br/>
                          <strong>Sri Chaitanya co-edn.jr.college </strong>, Vijayawada.<br/>
                                  05/2020 - 05/2022 <br/>marks(%) : 94%<br/><br/>
                                  <strong>Sri Chaitanya High School</strong>, Vijayawada.<br/>
                                  06/2019 - 04/2020<br/> marks(%) : 100
                          <br />
                          <br />
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>



          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>
            </Container>
        </Container>
    </div>
  )
}

export default Education;
