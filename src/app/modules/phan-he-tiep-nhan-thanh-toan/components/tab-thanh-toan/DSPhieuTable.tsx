import moment from 'moment'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { IPhieu } from '../../models/ThanhToanModel'
import { convertNumberPrice } from '../../../utils/FormatUtils'
import { CODE_LOAI_PHIEU } from '../../constants/TabThanhToanConstant'

type Props = {
  dsPhieu: IPhieu[];
  handleContextMenu?: (e: any, row: any) => void;
  handleClickPhieu?: React.Dispatch<any>;
}

const DSPhieuTable = ({ dsPhieu, handleContextMenu, handleClickPhieu }: Props) => {
  const originalFormat = 'HH:mm DD/MM/YYYY';

  const renderTooltip = (item: IPhieu) => {
    return <Tooltip id="button-tooltip" className='w-tooltip-inner'>
      <div className="text-start">
        <div className="fw-bold">Thông tin phiếu thu</div>
        <div>Mã phiếu: {item?.soPhieu}</div>
        <div>ID phiếu: 253</div>
        <div>Loại phiếu: {item?.loaiPhieu?.name}</div>
        <div>Số tiền: {convertNumberPrice(item?.soTien)}</div>
        <div>Người tạo: {item?.nguoiThu}</div>
        <div>Thời gian: {item?.ngayThu}</div>
      </div>
    </Tooltip>
  }

  return (
    <div>
      <table className="w-100">
        <tbody>
          {dsPhieu?.map((item, index) => {
            const statusPhieu = item?.loaiPhieu?.code === CODE_LOAI_PHIEU.HOAN_UNG.code ? "-" : "+";
            return <tr key={index} onContextMenu={(e) => handleContextMenu?.(e, item)} onClick={() => handleClickPhieu?.(item)}>
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 10 }}
                overlay={renderTooltip(item)}
              >
                <td className="text-center border-bottom border-top cursor-pointer">
                  <span className="fw-bold fs-6">{moment(item?.ngayThu, originalFormat).format("DD/MM/YYYY")}</span>
                  <br />
                  <span>{`(${statusPhieu})`} {convertNumberPrice(item?.soTien)}</span>
                </td>
              </OverlayTrigger>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DSPhieuTable