import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

import ContextMenu from '../../component/ContextMenu';
import SelectTree from '../../component/SelectTree';
import { SELECTION_MODE } from '../../utils/Constant';
import { ColumnsDsBenhNhanCDHA } from '../constants/Columns';
import { trangThaiBenhNhanCDHA } from '../constants/Constants';
import ModalLichSuKhamCDHA from '../modals/ModalLichSuKhamCDHA';
import { IBenhNhanV3CDHA } from '../models/ModelsPhanHeCDHAVaTDCN';
import { TableCustom } from '../../component/table/table-custom/TableCustom';

type Props = {
	setInfoPhieuCDHA: (benhNhan: IBenhNhanV3CDHA) => void;
	dataSearched: IBenhNhanV3CDHA[];
}

const BangDsPhieuCDHA = (props: Props) => {
	const { setInfoPhieuCDHA, dataSearched } = props;
	const [contextMenu, setContextMenu] = useState<null | { x: number; y: number }>(null);
	const contextRef = useRef<HTMLDivElement | null>(null);
	const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
	const [idSelected, setIdSelected] = useState<string>("");
	const [openDialogLichSuKhamBenh, setOpenDialogLichSuKhamBenh] = useState<boolean>(false)

	useEffect(() => {
		setCodeCollapses([...MenuTree.filter.map((item) => item.code)]);
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (idSelected.includes("goiBenhNhan")) {
			toast.warning("Gọi bệnh nhân thành công!");
			handleSelected("goiBenhNhan");
		}
		if (idSelected.includes("lskb")) {
			setOpenDialogLichSuKhamBenh(true)
			handleSelected("thayTheDichVuKhac");
		}
	}, [idSelected]);

	const handleSelected = (code: string) => {
		if (idSelected === code) {
			setIdSelected("");
		} else {
			setIdSelected(code);
		}
	};
	const handleClickOutside = (e: any) => {
		if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
			setContextMenu(null);
		}
	};

	const MenuTree = {
		filter: [
			{
				code: "benhNhan",
				name: "Bệnh nhân",
				filter: [{ code: "goiBenhNhan", name: "Gọi bệnh nhân" }],
			},
			{
				code: "benhAn",
				name: "Bệnh án",
				filter: [
					{ code: "lskb", name: "Lịch sử khám bệnh" },
				],
			},
		],
	};
	const handleSelectedBenhNhan = async (phieuCDHA: IBenhNhanV3CDHA[]) => {
		setInfoPhieuCDHA(phieuCDHA[0]);
	};

	const handleContextMenu = (e: any, row: any) => {
		e.preventDefault();
		setContextMenu({ x: e.clientX, y: e.clientY });
	};
	return (
		<div className="flex flex-column flex-1 pt-3">
			<TableCustom<IBenhNhanV3CDHA>
				data={dataSearched}
				columns={ColumnsDsBenhNhanCDHA}
				selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
				getSelectedRowsData={handleSelectedBenhNhan}
				verticalScroll={true}
				handleContextMenu={handleContextMenu}
				className='flex-1'
			/>
			<div className="pt-5 d-flex justify-content-center">
				<div className="spaces w-100 ms-2">
					<Row className="d-flex">
						<Col xs={6} className="min-w-90px text-start">
							<i className="bi bi-circle-fill pe-2 text-status-purple"></i>&nbsp;
							<span>{trangThaiBenhNhanCDHA.choDenLuot.name}</span>
						</Col>
						<Col xs={6} className="min-w-120px text-start">
							<i className="bi bi-circle-fill pe-2 text-status-orange"></i>&nbsp;
							<span>{trangThaiBenhNhanCDHA.daCoKetLuan.name}</span>
						</Col>
						<Col xs={6} className="min-w-90px text-start">
							<i className="bi bi-circle-fill pe-2 text-status-blue"></i>&nbsp;
							<span>{trangThaiBenhNhanCDHA.bacSiDaKyKQ.name}</span>
						</Col>
						<Col xs={6} className="min-w-90px text-start">
							<i className="bi bi-circle-fill pe-2 text-status-ocean"></i>&nbsp;
							<span>{trangThaiBenhNhanCDHA.daTraKetQua.name}</span>
						</Col>
					</Row>
					<Row className="d-flex">
						<Col xs={6} className="min-w-120px text-start">
							<i className="bi bi-circle-fill pe-2 text-status-green"></i>&nbsp;
							<span>{trangThaiBenhNhanCDHA.dangThucHien.name}</span>
						</Col>
					</Row>
				</div>
			</div>

			<div ref={contextRef}>
				{contextMenu && (
					<ContextMenu className="w-300px h-fit" x={contextMenu.x} y={contextMenu.y}>
						<div>
							<SelectTree
								className="w-100 h-100 border"
								codeCollapses={codeCollapses}
								handleChangeCollapsesCode={setCodeCollapses}
								idSelected={idSelected}
								handleChangeSelectId={setIdSelected}
								selectTree={MenuTree}
							/>
						</div>
					</ContextMenu>
				)}
			</div>
			{
				openDialogLichSuKhamBenh && <ModalLichSuKhamCDHA open={openDialogLichSuKhamBenh} handleClose={setOpenDialogLichSuKhamBenh} />
			}
		</div>
	);
};

export default BangDsPhieuCDHA;
