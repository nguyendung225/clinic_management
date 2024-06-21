import { FC, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../../../appContext/AppContext";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import { CODE, RESPONSE_MESSAGE } from "../../../../utils/Constant";
import { rowsForPage } from "../../../../utils/PageUtils";
import { KEY_TAB_KHAM_BENH } from "../../../constants/PhanHeTiepNhan";
import { bangLichSuKham, benhNhan } from "../../../models/PhanHeTiepNhanModel";
import { getListSu } from "../../../services/TiepNhanServices";
import { LichSuKhamColumn } from "./LichSuKhamColumn";
import { fakeDataLichSuKham } from "../../fakeData";
import ContextMenu from "../../../../component/ContextMenuV2";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import { useIntl } from "react-intl";
import { CHUYEN_PHIEU, contextMenuLichSuKham } from "../../../constants/constants";
import ModalChinhSuaThoiGian from "../modal-lich-su-kham/ModalChinhSuaThoiGian";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

export type lichSu = {
  values?: benhNhan;
  activeKey?: string;
  heightTable?: string;
}

const TabLichSu: FC<lichSu> = (props) => {
  let { values, activeKey, heightTable } = props;
  const intl = useIntl();
  const { setIsLoading } = useContext(AppContext);
  const [DSLichSu, setDSLichSu] = useState<bangLichSuKham[]>([]);
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState(false);
  const [titleConfirmDialog, setTitleConfirmDialog] = useState("");
  const [messageConfirmDialog, setMessageTitleConfirmDialog] = useState("");
  const [optionConfirmDialog, setOptionConfirmDialog] = useState("");
  const [shouldOpenChinhSuaThoiGianDialog, setShouldOpenChinhSuaThoiGianDialog] = useState(false);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [contextClientX, setContextClientX] = useState<number>(0);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setContextClientX(e.clientX);

    const heightDropList = document.getElementById("drop-list")?.clientHeight || 0;
    const isOnRight = (window.innerWidth - e.clientX) < 200;
    const newX = isOnRight ? e.clientX - 200 : e.clientX;
    const isBottom = (window.innerHeight - e.clientY) < 200;
    const newY = isBottom ? e.clientY - heightDropList : e.clientY;
    
    setContextMenu({ x: newX, y: newY });
  };

  const handleClickOutside = (e: any) => {
    if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
      setContextMenu(null);
    }
  };

  const handleClickOptionContextMenu = (option: any) => {
    const optionDetails = {
      [CHUYEN_PHIEU.NOI_TRU]: {
        title: "Xác nhận chuyển sang viện phí nội trú",
        message: "Bạn có chắc chắn muốn chuyển sang viện phí nội trú không?",
        action: null
      },
      [CHUYEN_PHIEU.NGOAI_TRU]: {
        title: "Xác nhận chuyển sang viện phí ngoại trú",
        message: "Bạn có chắc chắn muốn chuyển sang viện phí ngoại trú không?",
        action: null
      },
      [CHUYEN_PHIEU.DOT_TIEP_THEO]: {
        title: "Chuyển các phiếu bệnh án sang đợt tiếp theo",
        message: "Bệnh án không có đợt tiếp theo!",
        action: null
      },
      [CHUYEN_PHIEU.CHINH_SUA_THOI_GIAN]: {
        title: "",
        message: "",
        action: () => setShouldOpenChinhSuaThoiGianDialog(true),
      },
    };
    
    const optionDetail = optionDetails[option?.code];
    if (optionDetail.action) {
      optionDetail.action();
    } else {
      setShouldOpenConfirmDialog(true);
      setTitleConfirmDialog(optionDetail.title);
      setMessageTitleConfirmDialog(optionDetail.message);
      setOptionConfirmDialog(option);
    }
  };

  useEffect(() => {
    if (values?.id && KEY_TAB_KHAM_BENH.LICH_SU === activeKey) {
      getListLichSu(values?.id)
    }
  }, [activeKey]);

    const getListLichSu = async (patientId: string) => {
        try {
            setIsLoading(true)
            const res = await getListSu(patientId)
            if (res?.data?.code === CODE.SUCCESS) {
                setDSLichSu(res?.data?.data)
            }

      setIsLoading(false);
    } catch {
      toast.warning(RESPONSE_MESSAGE.ERROR)
      setIsLoading(false);
    }
  }

  const handleOnYesClick = () => {
    console.log(optionConfirmDialog);
    setShouldOpenConfirmDialog(false);
  }

  return (
    <>
      <TableCustom<bangLichSuKham>
        className={`${heightTable ? heightTable : "h-calc-vh-465"} spaces mt-6`}
        columns={LichSuKhamColumn}
        data={fakeDataLichSuKham || DSLichSu}
        handleContextMenu={handleContextMenu}
      />
      <TablePagination
        handlePagesChange={() => { }}
        handleRowsPerPageChange={() => { }}
        rowsPerPage={1}
        rowsForPage={rowsForPage}
        page={0}
        setPage={() => { }}
        setRowsPerPage={() => { }}
        totalPages={99}
        totalElements={99}
      />

      <div ref={contextRef}>
        {contextMenu && (
          <ContextMenu contextClientX={contextClientX} data={contextMenuLichSuKham} x={contextMenu.x} y={contextMenu.y} handleClickOptionContextMenu={handleClickOptionContextMenu} />
        )}
      </div>

      <ConfirmDialog
        show={shouldOpenConfirmDialog}
        title={titleConfirmDialog}
        message={messageConfirmDialog}
        yes={intl.formatMessage({ id: 'BTN.CONFIRM' })}
        onYesClick={handleOnYesClick}
        cancel={intl.formatMessage({ id: 'BTN.CANCEL' })}
        onCancelClick={() => setShouldOpenConfirmDialog(false)}
      />
      
      <ModalChinhSuaThoiGian show={shouldOpenChinhSuaThoiGianDialog} handleCloseDialog={() => setShouldOpenChinhSuaThoiGianDialog(false)}/>
    </>
  );
}

export default TabLichSu;
