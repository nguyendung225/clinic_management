import moment from "moment";

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

export const formatDate = (value: string | undefined) => {
    if(value){
        return value.split('-').reverse().join('/').toString();
    }else{
        return value;
    }
}

export const removeDiacritics = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const formatDateToString = (date: string | undefined) => {
    let newDate =date ?  new Date(date) : null;
    return newDate ? moment(newDate).format("DD/MM/YYYY") : "";
}
