import { useEffect, useState } from "react";
import SelectTree from "../../../component/SelectTree";

const DanhSachDichVu = (props: any) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  useEffect(() => {
    setCodeCollapses([...TreeDsDichVu.filter.map((item) => item.code)]);
  }, []);
  const TreeDsDichVu = {
    filter: [
      {
        code: "tatCaThuoc",
        name: "Nhà thuốc",
        filter: [
          { code: "1", name: "Thuốc viên" },
          { code: "2", name: "Thuốc ống" },
          { code: "3", name: "Dịch truyền" },
          { code: "4", name: "Thuốc kháng sinh viên" },
          { code: "5", name: "Thuốc đông y" },
          { code: "6", name: "Thuốc sirô" },
          { code: "7", name: "Thuốc hỗn dịch" },
          { code: "8", name: "Thuốc dùng ngoài" },
          { code: "9", name: "Thuốc bột" },
          { code: "10", name: "Thuốc gây nghiện" },
          { code: "11", name: "Thuốc hướng tâm thần" },
          { code: "12", name: "Nhóm corticoid" },
        ],
      },
      {
        code: "khothuoc",
        name: "Kho thuốc ngoại chú BHYT",
        filter: [
          { code: "10", name: "Thuốc viên" },
          { code: "11", name: "Thuốc ống" },
        ],
      },
    ],
  };
  return (
    <div>
      <SelectTree
        className="w-100 h-100 border-0"
        codeCollapses={codeCollapses}
        handleChangeCollapsesCode={setCodeCollapses}
        idSelected={idSelected}
        handleChangeSelectId={setIdSelected}
        selectTree={TreeDsDichVu}
      />
    </div>
  );
};

export default DanhSachDichVu;
