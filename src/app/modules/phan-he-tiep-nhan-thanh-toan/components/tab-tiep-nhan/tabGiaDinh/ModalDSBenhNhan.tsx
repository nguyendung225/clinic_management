import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import AutocompleteV2 from '../../../../component/AutocompleteObjectV2';
import InputSearch from '../../../../component/InputSearch';
import SelectTree from '../../../../component/SelectTree';
import TextField from '../../../../component/TextField';
import { KEY } from '../../../../utils/Constant';
import { CODE_ITEM_MENU, contextMenuModalDSBenhNhan, treeModalDSBenhNhan } from '../../../constants/constants';
import { Tree, fakeDataDSBenhNhan } from '../../fakeData';
import { columnDSBanhNhan } from './DSBenhNhanColumn';
import { IDSBenhNhan } from '../../../models/DanhSachBenhNhanModel';
import ContextMenu from '../../../../component/ContextMenuV2';
import DialogLichSuKham from '../../../../phan-he-xet-nghiem/components/tab-lay-mau-benh-pham/DialogLichSuKham';
import { AppContext } from '../../../../appContext/AppContext';
import ModalPhieuIn from '../../../../component/ModalPhieuIn';
import { ModalPhieuKyQuyBoSung } from './ModalPhieuKyQuyBoSung';
import { stylePrintLandscape } from '../../../../component/phieu-in/constant';
import ModalTuyChonBaoCao from './ModalTuyChonBaoCao';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalDSBenhNhan = ({ show, handleCloseDialog }: Props) => {
  const { setInfoBenhNhanContext } = useContext(AppContext);
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [ngay, setNgay] = useState({
    tuNgay: "",
    denNgay: "",
  });
  const [keyword, setKeyword] = useState("");
  const [openDialogLichSuKhamBenh, setOpenDialogLichSuKhamBenh] = useState<boolean>(false);
  const [openDialogTuyChonBaoCao, setOpenDialogTuyChonBaoCao] = useState<boolean>(false);
  const [selectRow, setSelectRow] = useState<any>({});
  const [openPhieuKyQuyBoSung, setOpenPhieuKyQuyBoSung] = useState(false);
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
    setSelectRow(row);
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

  const handleClickOptionContextMenu = (value: any) => {
    const options = {
      [CODE_ITEM_MENU.LICH_SU_KHAM_BENH]: () => {
        setOpenDialogLichSuKhamBenh(true);
        setContextMenu(null);
        setInfoBenhNhanContext(selectRow?.original);
      },
      [CODE_ITEM_MENU.PHIEU_QUY_BO_SUNG]: () => {
        setOpenPhieuKyQuyBoSung(true);
        setContextMenu(null);
      },
      [CODE_ITEM_MENU.XUAT_DANH_SACH_BENH_NHAN]: () => {
        setOpenDialogTuyChonBaoCao(true);
        setContextMenu(null);
      },
    }

    options[value?.code]();
  };

  useEffect(() => {
    setCodeCollapses([Tree.code, ...Tree.filter.map((item: any) => item.code)]);
  }, []);

  const handleChangeNgay = (e: any) => {
    const { name, value } = e.target;
    setNgay({ ...ngay, [name]: value });
  }

  const handleSearchNgay = () => {
    console.log(ngay);
  }

  const handleChangeKeywordSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSearchInput = () => {

  }


  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === KEY.ENTER) {

    }
  }

  return (
    <div>
      <Modal centered show={show} onHide={handleCloseDialog} size='xl'>
        <Modal.Header closeButton className='py-4'>
          <Modal.Title>
            Danh sách bệnh nhân
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='mb-2 align-items-end'>
            <Col xl={4}></Col>

            <Col xl={8} className='d-flex justify-content-end align-items-end pe-0'>
              <TextField
                
                label="Từ ngày"
                name="tuNgay"
                type="dateTime-local"
                value={ngay?.tuNgay || ""}
                onChange={handleChangeNgay}
              />

              <TextField
                className=" ms-2"
                label="Đến ngày"
                name="denNgay"
                type="dateTime-local"
                value={ngay?.denNgay || ""}
                onChange={handleChangeNgay}
              />

              <Button className='btn-fill ms-2' onClick={handleSearchNgay}>Tìm kiếm</Button>
            </Col>
          </Row>

          <Row>
            <Col xl={3} className='p-0 border'>
              <AutocompleteV2
                options={[]}
                name="khoa"
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                placeholder="(Tất cả khoa)"
              />
              <SelectTree
                codeCollapses={codeCollapses}
                handleChangeCollapsesCode={setCodeCollapses}
                idSelected={idSelected}
                handleChangeSelectId={setIdSelected}
                selectTree={treeModalDSBenhNhan}
                className="h-tree-ds-tiep-nhan overflow-auto w-100 border-0"
              />
            </Col>

            <Col xl={9} className='p-0 border'>
              <InputSearch
                handleChange={handleChangeKeywordSearch}
                handleSearch={handleSearchInput}
                handleKeyDown={handleOnKeyDown}
                className='spaces h-25 '
              />
              <TableCustom<IDSBenhNhan> columns={columnDSBanhNhan} data={fakeDataDSBenhNhan} handleContextMenu={handleContextMenu} />

            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <div ref={contextRef}>
        {contextMenu && (
          <ContextMenu
            className='z-index-1056'
            contextClientX={contextClientX}
            data={contextMenuModalDSBenhNhan}
            x={contextMenu.x}
            y={contextMenu.y}
            handleClickOptionContextMenu={handleClickOptionContextMenu}
          />
        )}
      </div>

      <DialogLichSuKham open={openDialogLichSuKhamBenh} handleClose={setOpenDialogLichSuKhamBenh} />

      <ModalPhieuIn
        show={openPhieuKyQuyBoSung}
        handleCloseDialog={() => setOpenPhieuKyQuyBoSung(false)}
        title='Phiếu ký quỹ bổ sung'
        size='xl'
        stylePrint={stylePrintLandscape}
      >
        <ModalPhieuKyQuyBoSung />
      </ModalPhieuIn>

      <ModalTuyChonBaoCao show={openDialogTuyChonBaoCao} handleCloseDialog={() => setOpenDialogTuyChonBaoCao(false)}/>
    </div>
  )
}

export default ModalDSBenhNhan