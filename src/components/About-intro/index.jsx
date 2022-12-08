import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who Are We?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We are Nyte Digital - the solution to your digital content
                  needs. In a world that runs on digital marketing, the internet
                  is a goldmine of opportunities for all kinds of businesses
                  worldwide. And this is where we help you elevate, from
                  providing various ranges of services like Still Graphics,
                  Motion Graphics, 3D Designing, Digital Art, Content Writing,
                  Web Development etc we have got you covered. We promise to not
                  only meet your demands but also fulfill them with excellence
                  and expertise.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
