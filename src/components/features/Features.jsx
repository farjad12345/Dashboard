import React from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Features() {
  return (
    <div className="Features">
      <div className="FeatureItem">
        <span className="FitureTitle">Revanue
        </span>
          <div className="featureContainer">
            <span className="FetureManey">$2.24</span>
            <span className="FetureRate">-11.4
              <ArrowDownwardIcon className="FeatureIcon nagative" />
            </span>
          </div>
          <span className="FeatureSub">Campared to last month </span>
      </div>
      <div className="FeatureItem">
        <span className="FitureTitle">Sales
        </span>
          <div className="featureContainer">
            <span className="FetureManey">$4,414</span>
            <span className="FetureRate">-1.4
              <ArrowDownwardIcon className="FeatureIcon nagative" />
            </span>
          </div>
          <span className="FeatureSub">Campared to last month </span>
      </div>
      <div className="FeatureItem">
        <span className="FitureTitle">Cost
        </span>
          <div className="featureContainer">
            <span className="FetureManey">$2,228</span>
            <span className="FetureRate">+2.4
              <ArrowUpwardIcon className="FeatureIcon " />
            </span>
          </div>
          <span className="FeatureSub">Campared to last month </span>
      </div>
    </div>
  );
}

export default Features;
