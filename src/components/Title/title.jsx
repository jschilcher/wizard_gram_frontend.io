import React from 'react';
import "../Title/title.css"

function Title(props) {
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="title-nav">
                    <h1>WizaredGram</h1>
                </div>
            </div>
        </div>
    );
}

export default Title;