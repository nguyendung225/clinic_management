import React from "react";

interface ContextMenuProps {
  x: number;
  y: number;
  children: any;
  className?: string;
  title?: string;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, children, className, title }) => {
  return (
    <div
      style={{
        top: y ,
        left: x ,
      }}
      className={`context-menu ${className}`}
    >
      {title && <div className="bg-secondary ps-3 fw-bold fs-5">{title}</div>}
      <div>{children}</div>
    </div>
  );
};

export default ContextMenu;
