import React, { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";
import { IContextMenu } from "../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import DropList from "./drop-list/DropListV2";

interface ContextMenuProps {
  x: number;
  y: number;
  className?: string;
  title?: string;
  data?: IContextMenu[];
  handleClickOptionContextMenu?: (value: any) => void;
  contextClientX?: number;
  contextRef?: MutableRefObject<HTMLDivElement | null>
  setContextMenu?: Dispatch<SetStateAction<{ x: number; y: number; } | null>>
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, className, data, handleClickOptionContextMenu, contextClientX, contextRef, setContextMenu }) => {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (contextRef?.current && !contextRef.current.contains(e.target as Node)) {
      setContextMenu?.(null);
    }
  };
  
  return (
    <div
      style={{
        top: y,
        left: x,
      }}
      className={`context-menu p-0 ${className} position-fixed`}
    >
      <div id="drop-list">
        <DropList contextClientX={contextClientX} data={data} handleClickOptionContextMenu={handleClickOptionContextMenu}/>
      </div>
    </div>
  );
};

export default ContextMenu;
