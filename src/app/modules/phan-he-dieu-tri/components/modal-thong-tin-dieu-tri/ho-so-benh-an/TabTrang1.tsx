import LabelRequired from "../../../../component/LabelRequired"
import TextValidator from "../../../../component/TextValidator"
import CustomTextarea from "../../../../component/custom-textarea/CustomTextarea"

type Props = {}

const TabTrang1 = (props: Props) => {
  return (
    <div className="p-6 overflow-auto spaces h-calc-vh-227">
      <div className="d-flex justify-content-between">
        <div className="min-w-300px">
          <div className="d-flex align-items-center spaces h-29">
            <LabelRequired label="Sở Y Tế:" className="min-w-70px mb-2" />
            <CustomTextarea disabled={true} />
          </div>
          <div className="d-flex align-items-center spaces h-29">
            <LabelRequired label="Bệnh viện:" className="min-w-70px mb-2" />
            <CustomTextarea disabled={true} />
          </div>
          <div className="d-flex align-items-center spaces h-29">
            <LabelRequired label="Khoa:" className="min-w-70px mb-2" />
            <CustomTextarea disabled={true} />
          </div>
        </div>

        <div className="min-w-300px">
          <div className="d-flex align-items-center spaces h-29">
            <LabelRequired label="Số lưu trữ:" className="min-w-70px mb-2" />
            <CustomTextarea disabled={true} />
          </div>
          <div className="d-flex align-items-center spaces h-29">
            <LabelRequired label="Mã y tế:" className="min-w-70px mb-2" />
            <CustomTextarea disabled={true} />
          </div>
        </div>
      </div>

      <div className="text-danger fw-bold fs-2 text-center">BỆNH ÁN NỘI KHOA</div>

      <div>
        <div className="text-danger fw-bold">I. HÀNH CHÍNH</div>
        <div className="d-flex justify-content-between">
          <div className="me-5 spaces w-45">
            <div className="d-flex align-items-center spaces h-29">
              <LabelRequired label="1. Họ và tên (IN HOA):" className="spaces min-w-144 mb-2" />
              <CustomTextarea disabled={true} />
            </div>

            <div className="d-flex align-items-center spaces h-29">
              <LabelRequired label="3. Giới tính:" className="pe-2" />

              <div className="d-flex align-items-center spaces pr-50">
                <LabelRequired label="1. Nam" className="min-w-50px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Nữ" className="min-w-40px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="5. Dân tộc:" className="min-w-75px mb-2" />
              <CustomTextarea disabled={true} />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="7. Địa chỉ:" className="min-w-70px mb-2" />
              <CustomTextarea disabled={true} />
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="Huyện (Q,Tx):" className="min-w-85px mb-2 ms-5" />
              <CustomTextarea disabled={true} />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="8. Nơi làm việc:" className="min-w-100px mb-2" />
              <CustomTextarea disabled={true} />
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="10. BHYT giá trị đến:" className="spaces min-w-130 mb-2" />
              <CustomTextarea disabled={true} />
            </div>
          </div>

          <div className="spaces w-55">
            <div className="d-flex align-items-center justify-content-between spaces h-29">
              <div className="d-flex">
                <LabelRequired label="2. Sinh ngày:" className="min-w-85px" />
                <TextValidator disabled={true} className="spaces W-25 text-center me-1" />
                <TextValidator disabled={true} className="spaces W-25 text-center me-1" />
                <TextValidator disabled={true} className="spaces W-25 text-center me-1" />
                <TextValidator disabled={true} className="spaces W-25 text-center me-1" />
                <TextValidator disabled={true} className="spaces W-25 text-center me-1" />
                <TextValidator disabled={true} className="spaces W-25 text-center me-1" />
                <TextValidator disabled={true} className="spaces W-25 text-center me-1" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex spaces gap-1">
                <LabelRequired label="Tuổi" className="min-w-35px" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="4. Nghề nghiệp:" className="spaces min-w-105" />
              <CustomTextarea disabled={true} />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="6. Ngoại kiều:" className="spaces min-w-92" />
              <CustomTextarea disabled={true} />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="Xã phường:" className="ms-5 min-w-75px" />
              <CustomTextarea disabled={true} />
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="Tỉnh, thành phố:" className="ms-5 spaces min-w-105" />
              <CustomTextarea disabled={true} />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
              <TextValidator disabled={true} className="spaces W-25 text-center" />
            </div>

            <div className="d-flex align-items-center justify-content-between spaces h-29">
              <LabelRequired label="9. Đối tượng:" className="min-w-85px" />

              <div className="d-flex align-items-center">
                <LabelRequired label="1. BHYT" className="min-w-80px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Thu phí" className="min-w-80px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="3. Miễn phí" className="min-w-80px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="4. Khác" className="min-w-80px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1">
              <LabelRequired label="Số thẻ BHYT:" className="ms-5 min-w-85px" />
              <TextValidator disabled={true} className="spaces min-w-70px text-center" />
              <TextValidator disabled={true} className="spaces min-w-70px text-center" />
              <TextValidator disabled={true} className="spaces min-w-70px text-center" />
              <TextValidator disabled={true} className="spaces min-w-70px text-center" />
              <TextValidator disabled={true} className="spaces min-w-120 text-center" />
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex align-items-center spaces w-70 pe-5">
            <LabelRequired label="11. Họ tên, địa chỉ người nhà khi cần báo tin:" className="mb-2 spaces min-w-280 " />
            <CustomTextarea disabled={true} />
          </div>

          <div className="d-flex align-items-center spaces w-30">
            <LabelRequired label="Điện thoại số:" className="spaces min-w-86 mb-2" />
            <CustomTextarea disabled={true} />
          </div>
        </div>
      </div>

      <div>
        <div className="text-danger fw-bold">II. QUẢN LÝ NGƯỜI BỆNH</div>
        <div className="d-flex justify-content-between">
          <div className="me-5 spaces w-45">
            <div className="d-flex align-items-center">
              <LabelRequired label="12. Vào viện:" className="min-w-85px mb-2" />
              <CustomTextarea disabled={true} />
            </div>

            <div className="d-flex align-items-center justify-content-between spaces h-29">
              <LabelRequired label="13. Trực tiếp vào:" className="spaces min-w-110" />

              <div className="d-flex align-items-center">
                <LabelRequired label="1. Cấp cứu" className="min-w-70px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. KKB" className="min-w-50px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="3. Khoa điều trị" className="min-w-100px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex mb-1 gap-1">
              <div className="spaces min-w-110"></div>
              <div className="d-flex justify-content-between w-100">
                <div className="spaces min-w-135 text-center">Khoa</div>
                <div>ng/th/năm</div>
                <div>Số ngày ĐT</div>
              </div>
            </div>

            <div className="d-flex align-items-end gap-1">
              <LabelRequired label="15. Vào khoa:" className="spaces min-w-110" />
              <TextValidator disabled={true} className="spaces min-w-135 text-center" classGroup="spaces bottom-5" />
              <CustomTextarea disabled={true} bottom={6} />
              <TextValidator disabled={true} className="spaces W-25 text-center" classGroup="spaces bottom-5" />
              <TextValidator disabled={true} className="spaces W-25 text-center" classGroup="spaces bottom-5" />
            </div>

            <div className="d-flex align-items-end gap-1">
              <LabelRequired label="16. Chuyển khoa:" className="spaces min-w-110" />
              <TextValidator disabled={true} className="spaces min-w-135 text-center" classGroup="spaces bottom-5" />
              <CustomTextarea disabled={true} bottom={6} />
              <TextValidator disabled={true} className="spaces W-25 text-center" classGroup="spaces bottom-5" />
              <TextValidator disabled={true} className="spaces W-25 text-center" classGroup="spaces bottom-5" />
            </div>

            <div className="d-flex align-items-end gap-1">
              <LabelRequired label="" className="spaces min-w-110" />
              <TextValidator disabled={true} className="spaces min-w-135 text-center" classGroup="spaces bottom-5" />
              <CustomTextarea disabled={true} bottom={6} />
              <TextValidator disabled={true} className="spaces W-25 text-center" classGroup="spaces bottom-5" />
              <TextValidator disabled={true} className="spaces W-25 text-center" classGroup="spaces bottom-5" />
            </div>

            <div className="d-flex align-items-end gap-1">
              <LabelRequired label="" className="spaces min-w-110" />
              <TextValidator disabled={true} className="spaces min-w-135 text-center" classGroup="spaces bottom-5" />
              <CustomTextarea disabled={true} bottom={6} />
              <TextValidator disabled={true} className="spaces W-25 text-center" classGroup="spaces bottom-5" />
              <TextValidator disabled={true} className="spaces W-25 text-center" classGroup="spaces bottom-5" />
            </div>
          </div>

          <div className="spaces w-55">
            <div className="d-flex align-items-center justify-content-between spaces h-29">
              <LabelRequired label="14. Nơi giới thiệu:" className="spaces min-w-110" />

              <div className="d-flex align-items-center">
                <LabelRequired label="1. Cơ quan y tế" className="min-w-100px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Tự đến" className="min-w-90px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="3. Khác" className="min-w-90px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1 ps-8">
              &bull;
              <LabelRequired label="Vào viện do bệnh này lần thứ" className="ms-1 min-w-200px" />
              <CustomTextarea disabled={true} />
            </div>

            <div className="d-flex align-items-center justify-content-between spaces h-29">
              <LabelRequired label="17. Chuyển viện:" className="spaces min-w-110" />

              <div className="d-flex align-items-center">
                <LabelRequired label="1. Tuyến trên" className="min-w-100px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Tuyến dưới" className="min-w-90px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="3. CK" className="min-w-90px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex align-items-center spaces h-29 gap-1 ps-8">
              &bull;
              <LabelRequired label="Chuyển đến" className="ms-1 min-w-100px" />
              <TextValidator disabled={true} as="textarea" className="mt-10" />
            </div>

            <div className="d-flex align-items-center mt-10">
              <LabelRequired label="18. Ra viện:" className="min-w-75px mb-2" />
              <CustomTextarea disabled={true} />
            </div>

            <div className="d-flex align-items-center justify-content-between spaces h-29 ps-8">
              <div className="d-flex align-items-center">
                <LabelRequired label="1. Ra viện" className="min-w-90px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Xin về" className="min-w-90px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="3. Bỏ về" className="min-w-90px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="4. Đưa về" className="min-w-90px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <LabelRequired label="19. Tổng số ngày điều trị" className="spaces min-w-155 fst-italic" />
              <div className="d-flex gap-1">
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-danger fw-bold">III. CHẨN ĐOÁN</div>
        <div className="d-flex justify-content-between">
          <div className="me-5 spaces w-45">
            <div className="d-flex align-items-center justify-content-between">
              <LabelRequired label="20. Nơi chuyển đến:" />
              <div className="d-flex gap-1">
                <LabelRequired label="Mã:" className="text-danger" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="ps-8">
              <TextValidator disabled={true} as="textarea" className="mt-1" />
            </div>

            <div className="d-flex align-items-center justify-content-between mt-1">
              <LabelRequired label="21. KKB, Cấp cứu:" />
              <div className="d-flex gap-1">
                <LabelRequired label="Mã:" className="text-danger" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="ps-8">
              <TextValidator disabled={true} as="textarea" className="mt-1" />
            </div>

            <div className="d-flex align-items-center justify-content-between mt-1">
              <LabelRequired label="22. Khi vào khoa điều trị:" />
              <div className="d-flex gap-1">
                <LabelRequired label="Mã:" className="text-danger" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="ps-8">
              <TextValidator disabled={true} as="textarea" className="mt-1" />
            </div>
          </div>

          <div className="spaces w-55">
            <LabelRequired label="23. Ra viện:" />
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="d-flex ps-5">
                &bull;
                <LabelRequired label="Bệnh chính:" className="ms-1" />
              </div>
              <div className="d-flex gap-1">
                <LabelRequired label="Mã:" className="text-danger" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="ps-8">
              <TextValidator disabled={true} as="textarea" className="mt-1" />
            </div>

            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="d-flex ps-5">
                &bull;
                <LabelRequired label="Bệnh kèm theo:" className="ms-1" />
              </div>
              <div className="d-flex gap-1">
                <LabelRequired label="Mã:" className="text-danger" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="ps-8">
              <TextValidator disabled={true} as="textarea" className="mt-1" />
            </div>

            <div className="d-flex align-items-center mt-1">
              <div className="d-flex align-items-center ps-5">
                &bull;
                <LabelRequired label="Tai biến:" className="ms-1 min-w-70px" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center ps-5">
                &bull;
                <LabelRequired label="Biến chứng:" className="ms-1 min-w-80px" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="text-danger fw-bold">IV. TÌNH TRẠNG RA VIỆN</div>
        <div className="d-flex justify-content-between">
          <div className="me-5 spaces w-45">
            <LabelRequired label="24. Kết quả điều trị:" />

            <div className="d-flex gap-5">
              <div className="d-flex align-items-center">
                <LabelRequired label="1. Khỏi" className="spaces min-w-105 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Đỡ giảm" className="spaces min-w-105 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="3. Không thay đổi" className="spaces min-w-110 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex gap-5 mt-1">
              <div className="d-flex align-items-center">
                <LabelRequired label="4. Nặng hơn" className="spaces min-w-105 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="5. Tử vong" className="spaces min-w-105 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <LabelRequired label="25. Giải phẫu bệnh (khi có sinh khiết):" />

            <div className="d-flex gap-5">
              <div className="d-flex align-items-center">
                <LabelRequired label="1. Lành tính" className="spaces min-w-105 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Nghi ngờ" className="spaces min-w-105 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="3. Ác tính" className="spaces min-w-110 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>
          </div>

          <div className="spaces w-55">
            <div className="d-flex align-items-center">
              <LabelRequired label="26. Tình hình tử vong:" className="spaces min-w-140 mb-2" />
              <CustomTextarea disabled={true} />
            </div>

            <div className="d-flex gap-5">
              <div className="d-flex align-items-center">
                <LabelRequired label="1. Do bệnh" className="spaces min-w-135 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Do tai biến điều trị" className="spaces min-w-135 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="3. Khác" className="min-w-125px fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex gap-5 mt-1">
              <div className="d-flex align-items-center">
                <LabelRequired label="1. Trong 24h vào viện" className="spaces min-w-135 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>

              <div className="d-flex align-items-center">
                <LabelRequired label="2. Sau 24h vào viện" className="spaces min-w-135 fst-italic" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mt-1">
              <LabelRequired label="27. Nguyên nhân chính gây tử vong:" />
              <div className="d-flex gap-1">
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <CustomTextarea disabled={true} />

            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="d-flex">
                <LabelRequired label="28. Khám nghiệm tử thi:" />
                <TextValidator disabled={true} className="spaces W-25 text-center ms-1" />
              </div>
              <div className="d-flex gap-1">
                <LabelRequired label="29. Chẩn đoán giải phẫu tử thi:" />
                <TextValidator disabled={true} className="spaces W-25 text-center ms-1" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
                <TextValidator disabled={true} className="spaces W-25 text-center" />
              </div>
            </div>

            <CustomTextarea disabled={true} />
          </div>
        </div>
      </div>

      <div></div>
    </div >
  )
}

export default TabTrang1