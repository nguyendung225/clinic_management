export const convertNumberPrice = (value: any) => {
    let number = Number(value ? value : 0)
    let plainNumber = number.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return plainNumber.substr(0, plainNumber.length - 2);
};
export const handleAgeCalculate = (DOB: string) => {
  const ageInMilliseconds = +(new Date()) - +(new Date(DOB));
  const ageDate = new Date(ageInMilliseconds);

  if (ageDate.getUTCFullYear() - 1970 < 1) {
    if (ageDate.getUTCMonth() < 1) {
      const days = ageDate.getUTCDate() - 1;
      return `${days} ngày`;
    } else {
      return `${ageDate.getUTCMonth()} tháng`;
    }
  } else {
    return `${Math.abs(ageDate.getUTCFullYear() - 1970).toString()} tuổi`;
  }
};