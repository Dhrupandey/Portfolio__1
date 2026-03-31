import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m a <span className="purple">Developer</span>{" "}
            from <span className="purple">Greater Noida, India</span>.
            <br />
            
            <span >I Provide various services such as : </span> <span className="purple">Website Development, SEO, Social Media Handler, Google and Meta Ads.</span>
            
            {/* <br />Currently providing solutions for <span className="purple">Westarc.in {" "}</span> */}
            
            
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
