export const templatePhieuChiDinh = `
<div style="font-size:16px;padding:24px">
    <div style="display:flex;justify-content:space-between">
        <div style="width:200px">
            <p style="text-transform:uppercase;font-size:18px;text-align:center;font-weight:bold">Xét nghiệm đông máu
            </p>
            <p style="font-size:18px;text-align:center;font-weight:bold;margin-top:2px">Barcode:1094</p>
        </div>
        <div>
            <p style="font-size:18px;font-weight:normal">Mã BN:24000024</p>
            <img style="width:150px" src="/media/images/Barcode.png" />
        </div>
    </div>
    <p style="font-weight:normal">
        - Họ tên người bệnh: <strong style="font-size:18px;font-weight:bold;text-transform:uppercase">{{hoTen}}</strong>
    </p>
    <p style="font-weight:normal">
        - Tuổi: {{tuoi}}({{namSinh}}) - Giới tính :{{gioiTinh}}
    </p>
    <p style="font-weight:normal">
        - Địa chỉ: {{diaChi}}
    </p>
    <p style="font-weight:normal">
        - Phòng chỉ định: <strong style="font-size:18px;font-weight:bold">{{noiChiDinh}}</strong>
    </p>
    <p style="font-weight:normal">
        - Ngày lấy mẫu: {{ngayLayMau}}
    </p>
    <div style="border:1px solid black;padding:10px;margin-top:4px">
        <p
            style="text-transform:uppercase;font-size:18px;text-align:center;font-weight:bold;border-bottom:1px solid black">
            Yêu Cầu</p>
        <div style="padding:5px;">
            <p style="text-transform:uppercase;font-size:18px;font-weight:normal">--------Đông máu--------</p>
            <p style="font-weight:normal">1.Thời gian máu chả phương pháp Duke</p>
            <p style="font-weight:normal">2.Thời gian prothrombin (PT: Prothrombin Time), (Các tên khác:
                TQ; Tỷ lệ Prothrombin bằng máy tự động)</p>
        </div>
    </div>
</div>
`