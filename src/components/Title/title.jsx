import React from "react";
import "../Title/title.css";

function Title(props) {
  return (
    <div className="row row-spacer barcolor">
      <div className="col-align" style={{ padding: 0 }}>
        <div className="title-nav">
          <h1>WizardGram</h1>
        </div>
      </div>
    </div>
  );
}

export default Title;
