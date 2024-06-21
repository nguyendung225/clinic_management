import { FunctionComponent } from "react";
import { columnTaiLieu } from "../../../constants/Columns";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

interface TaiLieuProps {
    
}
 
const TaiLieu: FunctionComponent<TaiLieuProps> = () => {
    return ( <>
        <TableCustom
            data={[]}
            columns={columnTaiLieu}
        />
    </> );
}
 
export default TaiLieu;