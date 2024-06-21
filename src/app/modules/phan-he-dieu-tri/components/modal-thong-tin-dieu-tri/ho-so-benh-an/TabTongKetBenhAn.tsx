import TextValidator from '../../../../component/TextValidator'

type Props = {}

const TabTongKetBenhAn = (props: Props) => {
  return (
    <div className="p-6 overflow-auto spaces h-calc-vh-227">
      <div className="mt-2">
        <div className='fw-bold ms-1'>1. Quá trình bệnh lý và diễn biến lâm sàng:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='d-flex'>
          <div className='fw-bold ms-1 spaces pr-50'>2. Tóm tắt kết quả xét nghiệm cận lâm sàng có giá trị chẩn đoán:</div>
          <a href="/" onClick={(e) => { e.preventDefault() }}><u>Chọn kết quả</u></a>
        </div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>3. Phương pháp điều trị:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>4. Tình trạng người bệnh ra viện:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>5. Hướng điều trị và các chế độ tiếp theo:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className='mt-2'>
        <table className='border-collapse w-100'>
          <tr>
            <th className='border border-2 min-w-400px text-center text-uppercase p-1 bg-secondary' colSpan={2}>Hồ sơ, phim, ảnh</th>
            <th className='border border-2 min-w-275px' rowSpan={4}></th>
            <th className='border border-2 min-w-275px' rowSpan={8}></th>
          </tr>

          <tr>
            <th className='border border-2 text-center text-uppercase p-1 bg-secondary'>Loại</th>
            <th className='border border-2 text-center text-uppercase p-1 bg-secondary'>Số giấy tờ</th>
          </tr>

          <tr>
            <td className='border border-2 p-1'>- X-Quang</td>
            <td className='border border-2'></td>
          </tr>

          <tr>
            <td className='border border-2 p-1'>- CT Scanner</td>
            <td className='border border-2'></td>
          </tr>

          <tr>
            <td className='border border-2 p-1'>- Siêu âm</td>
            <td className='border border-2'></td>
            <td className='border border-2' rowSpan={4}></td>
          </tr>

          <tr>
            <td className='border border-2 p-1'>- Xét nghiệm</td>
            <td className='border border-2'></td>
          </tr>

          <tr>
            <td className='border border-2 p-1'>- Khác</td>
            <td className='border border-2'></td>
          </tr>

          <tr>
            <td className='border border-2 p-1'>- Toàn bộ hồ sơ</td>
            <td className='border border-2'></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TabTongKetBenhAn