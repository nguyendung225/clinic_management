export const convertNumberPrice = (value: any) => {
    let number = Number(value ? value : 0)
    let plainNumber = number.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return plainNumber.substr(0, plainNumber.length - 2);
}