import  { useState } from "react";

import PropTypes from "prop-types";
import { FaChevronRight,FaChevronDown } from "react-icons/fa";
const ExpandableComponent = ({ title, titleIcon, content, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className={className} style={{borderRadius: "8px", padding: "10px", margin: "10px 0" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                }}
                onClick={toggleExpand}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {titleIcon && <span>{titleIcon}</span>}
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>{title}</span>
                </div>
                <span style={{ fontSize: "18px" }}>
                    {isExpanded ? <FaChevronDown /> : <FaChevronRight/>}
                </span>
            </div>
            {isExpanded && (
                <div style={{ marginTop: "10px", paddingLeft: "5px" }}>
                    {content}
                </div>
            )}
        </div>
    );
};

ExpandableComponent.propTypes = {
    title: PropTypes.string.isRequired,
    titleIcon: PropTypes.node,
    content: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ExpandableComponent.defaultProps = {
    titleIcon: null,
    className: "bg-background/90",
};

export default ExpandableComponent;
