import React from "react";
import Card from "./Card";
import supervisorIcon from "../images/icon-supervisor.svg";
import teambuilder from "../images/icon-team-builder.svg";
import karma from "../images/icon-karma.svg";
import calculator from "../images/icon-calculator.svg";

export default function FeatureSection() {
  return (
    <div className="feature-section container mx-auto row px-3">
      <div className="card-cont col-12 col-sm-4">
        <Card
          name="Card1"
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          image={supervisorIcon}
        />
      </div>

      <div className="Card-cont d-flex flex-column col-12 col-sm-4">
        <div>
          <Card
            name="Card2"
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            image={teambuilder}
          />
        </div>

        <div>
          <Card
            name="Card3"
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            image={karma}
          />
        </div>
      </div>

      <div className="card-cont col-12 col-sm-4">
        <Card
          name="Card4"
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          image={calculator}
        />
      </div>
    </div>
  );
}
