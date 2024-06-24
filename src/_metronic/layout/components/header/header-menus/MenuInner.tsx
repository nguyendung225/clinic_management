//@ts-nocheck
import "../../../../../app/modules/styles/index.scss"
import { MenuItem } from './MenuItem';
import { MenuInnerWithSub } from './MenuInnerWithSub';
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../../../../app/modules/appContext/AppContext';
import { MenuTab } from './MenuTab';
import { localStorageItem } from '../../../../../app/modules/utils/LocalStorage';
import { useLocation } from "react-router-dom";
import { checkIsActive } from "../../../../helpers";
export function MenuInner() {
  const { DSMenu, setEventKey } = useContext(AppContext);
  const [childrenTo, setChildrenTo] = useState<string | undefined>();
  const [isParentActive, setIsParentActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  const handleChange = (id: string | undefined, key: string | undefined, childrenTo: string | undefined) => {
    let data = localStorageItem.get(key) ? localStorageItem.get(key) : [];
    if (!data.includes(id)) {
      data.push(id);
      data.sort((a: string, b: string) => a > b ? 1 : -1);
      localStorageItem.set(key, data)
    }
    setChildrenTo(childrenTo);
    setEventKey(id)
  }

  useEffect(() => {
    if (childrenTo) {
      if (checkIsActive(pathname, childrenTo)) {
        setIsParentActive(true);
      } else {
        setIsParentActive(false);
      }
    }
  }, [pathname, childrenTo])

  const containerRef = useRef(null);
  const [dragStart, setDragStart] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const handleMouseDown = (e:any) => {
    setDragStart(e.clientX);
    setScrollStart(containerRef?.current.scrollLeft);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e:any) => {
    const dragDelta = e.clientX - dragStart;
    containerRef.current.scrollLeft = scrollStart - dragDelta;
  };
  const scrollToLeft = () => {
    containerRef.current.scrollLeft -= 200;
  };

  const scrollToRight = () => {
    containerRef.current.scrollLeft += 200;
  };
  

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

    return (
        <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
                <MenuItem
                  to='/home'
                  icon='./media/icons/menu.svg'
                />
                <i className="bi bi-chevron-bar-left fs-2 cursor-pointer" onClick={scrollToLeft}></i>
                <div className='header-menu-container' ref={containerRef}
                    onMouseDown={handleMouseDown}>
                    <MenuItem
                        to='/dat-lich-hen'
                        title={"Đặt lịch hẹn"}
                    />
                    <MenuItem
                        to='/phan-he-tiep-nhan'
                        title={"Tiếp nhận và Viện phí"}
                    />
                    <MenuItem
                        to='/kham-benh'
                        title={"Khám bệnh"}
                    />
                    <MenuItem
                        to='/test'
                        title={"Xét nghiệm"}
                    />
                    <MenuItem
                        to='/cdha-tdcn'
                        title={"CDHA-TDCN"}
                    />
                    <MenuItem
                        to='/dieu-tri'
                        title={"Điều trị"}
                    />
                    <MenuItem
                        to='/hanh-chinh'
                        title={"Hành chính"}
                    />
                    {/* <MenuItem
                        to='/quan-tri-he-thong'
                        title={"Quản trị hệ thống"}
                    /> */}
                    <MenuItem
                        to='/kho-duoc'
                        title={"Kho dược"}
                    />
                    <MenuItem
                        to='/kho-vat-tu'
                        title={"Kho vật tư"}
                    />
                    <MenuItem
                        to='/nha-thuoc-thu-ngan'
                        title={"Nhà thuốc & Thu ngân"}
                    />
                    <MenuItem
                        to='/chuyen-khoa'
                        title={"Chuyên khoa"}
                    />
                </div>
            </div>
            <i className="bi bi-chevron-bar-right fs-2 cursor-pointer" onClick={scrollToRight}></i>
        </div>
    );
}