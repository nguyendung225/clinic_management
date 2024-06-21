export const templatePhieuChiDinh = `
<div>
    <div style="display:flex; align-items: center; flex-direction: column;">
        <p style="text-transform:uppercase;font-size:20px;text-align:center;font-weight:bold">Bệnh viện đa khoa ABC</p>
        <img style="width:150px" src="/media/images/Barcode.png" />
        <p style="font-size:30px">1</p>
        <p style="font-size:20px;">{{thoiGianLapPhieu}}</p>
        <p style="font-size:20px; font-weight:normal">
            <strong style="font-size:20px; font-weight:bold;text-transform:uppercase">{{hoTen}}</strong> - {{namSinh}} ({{tuoi}} tuổi)
        </p>
        <p style="font-size:20px; font-weight:normal; text-transform:uppercase">Phòng thăm dò chức năng</p>
        <p style="font-size:20px; font-weight:normal; font-style:italic">Phiếu chỉ có giá trị trong ngày!</p>
    </div>
</div>
`