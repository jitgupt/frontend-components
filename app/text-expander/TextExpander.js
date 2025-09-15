"use client"
import { useState } from "react";

export const TextExpander = ({
  children,
  expanded = true,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  buttonInline = false,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    marginLeft: "4px",
    color: buttonColor,
  };

  const displayText = isExpanded
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords)}...`;

  return (
    <div className={className}>
      <p>
        <span>{displayText}</span>
        <button
          onClick={() => setIsExpanded((expanded) => !expanded)}
          style={buttonStyle}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </p>
    </div>
  );
}