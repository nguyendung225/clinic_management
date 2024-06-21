export const templatePhieuKQNX = `
<div style="font-size:16px; padding:24px">
    <div style="display:flex;justify-content:space-between">
        <div style="width:350px">
            <p style="text-transform:uppercase;font-size:18px;text-align:start;font-weight:bold">Sở y tế Hà Nội
            </p>
            <p style="text-transform:uppercase;font-size:18px;text-align:start;font-weight:bold">Bệnh viện đa khoa 203
            </p>
            <p>Thành phố :Hà Nội</p>
            <p>Điện thoại :0329927426</p>
            <p>Website :ocean.dev.oct.com.vn</p>
        </div>
        <div>
            <img style="width:250px" src="/media/images/Barcode.png" />
            <p>Mã BN:<strong>{{maBn}}</strong></p>
            <p>Số phiếu:<strong>XN0024</strong></p>
            <p>Thời gian lấy mẫu: 16:30 16/01/2024</p>
            <p>Thời gian nhận mẫu: 6:30 16/01/2024</p>
            <p>Tình trạng mẫu: <strong>Đạt</strong></p>
            <strong style="font-size:18px">Barcode: {{barcode}}</strong>
        </div>
    </div>

    <p style="margin-top:20px;text-transform:uppercase;font-size:20px;text-align:center;font-weight:bold">Phiếu kết quả xét nghiệm tại khoa</p>
    <div style="display:flex; justify-content:center;align-items:center;gap:8px;font-size:16px;margin-top:20x">
        Thường
        <input checked="true" disabled style="width:20px;height:20px" type="checkbox" />
        Cấp cứu
        <input disabled style="width:20px;height:20px" type="checkbox" />
    </div>
    <div style="display:flex; justify-content:space-between;margin-top:20px">
        <div>
            <p>
                - Họ tên người bệnh: <strong style="font-size:16px;font-weight:bold;text-transform:uppercase;">{{hoTen}}</strong>
            </p>
            <p>
            </p>
            <p>
                - Địa chỉ: {{diaChi}}
            </p>
            <p>
                - Phòng chỉ định: <strong style="font-size:16px;font-weight:bold"> {{noiChiDinh}}</strong>
            </p>
            <p>
                - Bác sĩ chỉ định:<strong style="font-size:16px;font-weight:bold"> {{bsChiDinh}}</strong>
            </p>
            <p>
                - Buồng:
            </p>
            <p>
                - Chẩn đoán: Z.40.8  Phẫu thuật dự phòng khác
            </p>
            <p>
                - Người lấy mẫu:
            </p>
        </div>
        <div>
            <p>
                - Ngày sinh: 2000 Giới tính :Nam
            </p>
            <p>
                - Số thẻ BHYT: 
            </p>
            <p>
            - Khoa: <strong style="font-size:16px;font-weight:bold">Khoa khám bệnh</strong>
            </p>
            <p>
                - Thời gian chỉ định: <strong style="font-size:16px;font-weight:bold">16:30 16/01/2024</strong>
            </p>
            <p>
                - Giường: 
            </p>
        </div>
    </div>

    <div>
    <table style="border-collapse: collapse; width: 100%;">
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;">TÊN XÉT NGHIỆM</td>
        <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;">KẾT QUẢ</td>
        <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;">ĐƠN VỊ</td>
        <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;">GT THAM CHIẾU</td>
        <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;">XN/PPXN</td>
    </tr>
    {{#list}}
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;">{{tenXetNghiem}}</td>
      <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;">{{ketQua}}</td>
      <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;"></td>
      <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;"></td>
      <td style="border: 1px solid black; padding: 8px; text-align: left; font-weight: 600;"></td>
    </tr>
  {{/list}}

</table>
<div style="display: flex; flex-direction: row; justify-content: center; margin-top:20px;gap:240px">
  <div>
  <p style="text-transform:uppercase;font-size:16px;text-align:center;font-weight:bold">Người thực hiện
  </p>
    </div>
    <div>
    <p style="text-align:center">10:31 Ngày 10 tháng 3 năm 2024</p>
    <p style="text-transform:uppercase;font-size:16px;text-align:center;font-weight:bold">Khoa xét nghiệm y tế Hà Nội
            </p>
  </div>
</div>
    </div>
</div>
`