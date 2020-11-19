import React from "react";

class LoadSaveWrap extends React.Component {
  render() {
    const isWorkspaceEditable = this.props.isWorkspaceEditable; // Disable loading and saving while workspace is being edited
    return (
      <div className="load-save-wrap">
        <button className="load-btn" id="load-btn" disabled={isWorkspaceEditable}>Load</button>
        <button className="save-btn" id="save-btn" disabled={isWorkspaceEditable}>Save</button>
      </div>
    );
  }
}

export default LoadSaveWrap;
