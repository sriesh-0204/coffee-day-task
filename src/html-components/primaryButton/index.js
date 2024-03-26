import React from "react";
import './index.scss'

function PrimaryButton({ onClick, label, type }) {
  return (
    <div>
      <button onClick={onClick} type={type} className="primary-color">
        {label}
        </button>
    </div>
  );
}

export default PrimaryButton;
