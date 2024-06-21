import { useEffect, useState } from "react";
import { IListColor } from "../utils/models";

type Props = {
  dsPhieu: any[];
  listColorPhieu?: IListColor[];
  handleSelectRowData?: (rowData: any) => void;
  handleContextMenu?: (e: any, item: any) => void;
  className?: string;
  title?: string;
}

const DanhSachPhieu = ({ dsPhieu, listColorPhieu, handleSelectRowData, handleContextMenu, className, title }: Props) => {
  const [currentIndex, setIndex] = useState(0);
  const [danhSachPhieu, setDanhSachPhieu] = useState<any>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setDanhSachPhieu(!showAll ? dsPhieu?.slice(0, 5) : dsPhieu)
  }, [showAll, dsPhieu])

  const handleClickPhieu = (currentIndex: number, item: any) => {
    setIndex(currentIndex);
    handleSelectRowData?.(item);
  }

  const renderColorTrangThaiPhieu = (trangThai: number) => {
    return listColorPhieu?.find(item => item?.code === trangThai) ?? { name: "" }
  }

  const handleShowAllPhieu = () => {
    setShowAll(!showAll)
  }

  const handleCustomContextMenu = (e: any, item: any) => {
    e.preventDefault();
    handleContextMenu && handleContextMenu(e, item);
  };

  const renderPhieu = () => {
    return danhSachPhieu?.length > 0 ? danhSachPhieu?.map((item: any, index: number) => {
      return (
        <div className={`spaces W-100 h-54 cursor-pointer`} onClick={() => handleClickPhieu(index, item)} onContextMenu={(e) => handleCustomContextMenu(e, item)}>
          <div className={`border spaces h-50 rounded-1 d-flex flex-column justify-content-center align-items-center phieu py-4 px-8 ${index === currentIndex ? "is-active" : ""}`}>
            <div className="text fw-semibold">{item?.date || ""}</div>
            {title && <div className="text">{item?.[title] || ""}</div>}
          </div>
          <div className="d-flex spaces mt-1 gap-1">
            {item?.nhomDichVu?.map((item: any, index: number) => {
              return <div key={index} className={`spaces width-33 h-3 status-column ${renderColorTrangThaiPhieu(item?.trangThai)?.name}`}></div>
            })}
          </div>
        </div>
      )
    }) : <div className="spaces h-54"></div>
  }

  return (
    <>
      <div className={`d-flex gap-2 ps-1 ds-phieu pe-2 ${className}`}>
        {renderPhieu()}
        {danhSachPhieu?.length >= 5 &&
          <span className="d-flex align-items-center cursor-pointer mx-1" onClick={handleShowAllPhieu}>
            <i className={`fa-solid fa-circle-${showAll ? "left" : "right"} fs-2`}></i>
          </span>
        }
      </div>
    </>
  )
}

export default DanhSachPhieu