import {FC, useContext} from "react"
import {useIntl} from "react-intl"
import CustomIconButton from "../../component/custom-icon-button/CustomIconButton"
import { CSKhamChuaBenh } from "../models/ModelSoKhamChuaBenh"
import { DanhMucCSKCBContext } from "../contexts/TabCoSoKhamChuaBenhContext"

type Props = {
  data: CSKhamChuaBenh
}

const DanhMucCSKCBActions: FC<Props> = ({data}) => {
  const intl = useIntl()
  const {handleEdit, handleOpenConfirmDialog} = useContext(DanhMucCSKCBContext)
  return (
    <div className="d-flex justify-content-center align-items-center">
            <>
              <CustomIconButton
                variant="edit"
                onClick={() => handleEdit(data)}
              >
                <i className="bi bi-pencil-square text-navy"></i>
              </CustomIconButton>

              <CustomIconButton
                variant="delete"
                onClick={() => handleOpenConfirmDialog(data)}
              >
                <i className="bi bi-trash3-fill text-danger"></i>
              </CustomIconButton>
            </>
    </div>
  )
}

export {DanhMucCSKCBActions}
