import { FC, useContext, useEffect, useState } from "react";
import { bangLichSuKham, benhNhan } from "../../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { AppContext } from "../../../../appContext/AppContext";
import { KEY_TAB_KHAM_BENH } from "../../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { getListSu } from "../../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { CODE, RESPONSE_MESSAGE } from "../../../../utils/Constant";
import { toast } from "react-toastify";
import moment from "moment";
import { LichSuKhamColumn } from "../../../../phan-he-tiep-nhan-thanh-toan/components/tab-tiep-nhan/tab-lich-su-kham/LichSuKhamColumn";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

export type lichSu = {
    values: benhNhan;
    activeKey: string;
}

const fakeData : bangLichSuKham[] = [
  {
    lan: "3",
    bacSi: "Nguyễn Thị Hằng",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1985",
    phong:" 11",
    xuLy: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
  },
  {
    lan: "2",
    bacSi: "Nguyễn Thị Hằng",
    ngay: moment().subtract(10,'days').format("DD/MM/YYYY"),
    khoa: "1985",
    phong:" 11",
    xuLy: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
  },
  {
    lan: "1",
    bacSi: "Nguyễn Thị Hằng",
    ngay: moment().subtract(20,'days').format("DD/MM/YYYY"),
    khoa: "1985",
    phong:" 11",
    xuLy: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
  },
];

const TabLichSuKB: FC<lichSu> = (props) => {
    let { values, activeKey } = props;
    const { setIsLoading } = useContext(AppContext);
    const [DSLichSu, setDSLichSu] = useState<bangLichSuKham[]>([]);

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
    return (
        <div className="tableHenKham">
        <TableCustom<bangLichSuKham>
            verticalScroll
            columns={LichSuKhamColumn}
            data={fakeData || DSLichSu  }
        />
      </div>
    );
}

export default TabLichSuKB;
