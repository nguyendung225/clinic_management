import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"

type Props = {}

const TabThongTinDieuTri = (props: Props) => {
  return (
    <>
      <div className="d-flex">
        <LabelRequired label="Kết quả giải phẫu" className="fw-bold min-w-150px align-items-start" />
        <TextValidator as="textarea" rows={4} />
      </div>

      <div>
        <LabelRequired label="Phương pháp điều trị" className="fw-bold min-w-150px mb-2" />

        <div className="d-flex mb-1">
          <LabelRequired label="1. Phẫu thuật" className="min-w-150px align-items-start" />
          <TextValidator as="textarea" rows={2} />
        </div>

        <div className="d-flex mb-1">
          <LabelRequired label="2. Tia xạ" className="min-w-150px align-items-start" />
          <TextValidator as="textarea" rows={2} />
        </div>

        <div className="d-flex mb-1">
          <LabelRequired label="3. Hóa chất" className="min-w-150px align-items-start" />
          <TextValidator as="textarea" rows={2} />
        </div>

        <div className="d-flex mb-1">
          <LabelRequired label="4. Phương pháp khác" className="min-w-150px align-items-start" />
          <TextValidator as="textarea" rows={2} />
        </div>
      </div>

      <div className="d-flex mb-1">
        <LabelRequired label="Kết quả điều trị" className="fw-bold min-w-150px align-items-start" />
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="d-flex">
        <LabelRequired label="Chế độ sau ra viện" className="fw-bold min-w-150px align-items-start" />
        <TextValidator as="textarea" rows={4} />
      </div>
    </>
  )
}

export default TabThongTinDieuTri