export const styles = {
    w_5: {
      width: "5%",
    },
    w_10: {
      width: "10%",
    },
    w_15: {
      width: "15%",
    },
    w_20: {
      width: "20%",
    },
    w_25: {
      width: "25%",
    },
    w_30: {
      width: "30%",
    },
    w_35: {
      width: "35%",
    },
    w_40: {
      width: "40%",
    },
    w_45: {
      width: "45%",
    },
    w_50: {
      width: "50%",
    },
    w_55: {
      width: "55%",
    },
    w_60: {
      width: "60%",
    },
    w_65: {
      width: "65%",
    },
    w_70: {
      width: "70%",
    },
    w_75: {
      width: "75%",
    },
    w_80: {
      width: "80%",
    },
    w_85: {
      width: "85%",
    },
    w_90: {
      width: "90%",
    },
    w_100: {
      width: "100%",
    },
    h_100: {
      height: "100%",
    },
    fontSize_16: {
      fontSize: "16px",
    },
    hr: {
      width: "100%",
      borderBottom: "1px dotted",
      display: "inline-block",
      height: "20px",
      top: "-2px",
      position: "absolute" as "absolute",
    },
    box_square: {
      display: "inline-block",
      border: "1px solid #333",
      width: "20px",
      height: "20px",
      margin: "0 1px"
    },
    box_rectangle: {
      display: "inline-block",
      border: "1px solid #333",
      width: "40px",
      height: "20px",
      margin: "0 1px"
    },
    d_flex: {
      display: "flex",
    },
    d_flex_align_center: {
      display: "flex",
      alignItems: "center",
    },
    d_flex_j_between: {
      display: "flex",
      justifyContent: "space-between",
    },
    d_flex_j_center: {
      display: "flex",
      justifyContent: "center",
    },
    d_flex_j_around: {
      display: "flex",
      justifyContent: "space-around",
    },
    d_flex_j_end: {
      display: "flex",
      justifyContent: "end",
    },
    flex_column: {
      display: "flex",
      flexDirection: "column" as "column",
    },
    flex_column_center: {
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "center",
      alignItems: "center"
    },
    overflow: {
      hidden: {
        overflow: "hidden",
      }
    },
    position: {
      relative: {
        position: "relative" as "relative",
      },
      absolute: {
        position: "absolute" as "absolute",
      },
    },
    textAlign: {
      center: {
        textAlign: "center" as "center",
      },
      right: {
         textAlign: "right" as "right",
      },
      left: {
         textAlign: "left" as "left",
      }
    },
    titleFrom: {
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center" as "center",
        textTransform: "uppercase" as any
    },
    lastLetter: {
      position: "relative" as "relative", 
      float: "right" as "right", 
      zIndex: "1", 
      background: "#fff"
    },
    firstLineLetter: {
      width: "100%", 
      position: "relative" as "relative",
      overflow: "hidden",
      lineHeight: "22px",
    },
    mainContent: {
      fontWeight: "bold",
      marginTop: "15px",
    },
    textDataUnderline: {
      display: "inline-block",
      height: "16px",
      borderBottom: "1px dotted",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as any,
    },
    border:{
      border:"1px solid",
      padding: "4px"
    },
    box:(width: string, borderRightNone?: string, height?: string) => ({
      textAlign:"center" as any,
      border:"1px solid black", 
      display:"inline-block",
      height: height ? height : "20px",
      width: width,
      borderRight: borderRightNone ? borderRightNone : '1px solid black',
    }),
    checkbox:{
      width: "20px",
      height: "20px",
      color: "#000000",
      accentColor: "white",
      outline: "1px solid #080808",
      appearance: "none" as any
    },
    checkbox_checked:{
      width: "20px",
      height: "20px",
      color: "#000000",
      accentColor: "white",
      outline: "1px solid #080808",
    },
    fontBold: {
      fontWeight: "bold",
    },
    fontNormal: {
      fontWeight: "normal",
    },
    fontSize: {
      _11px:{
        fontSize: "11px",
      },
      _12px:{
        fontSize: "12px",
      },
      _13px:{
        fontSize: "13px",
      },
      _14px:{
        fontSize: "14px",
      },
      _16px:{
        fontSize: "16px",
      },
      _18px:{
        fontSize: "18px",
      },
      _20px:{
        fontSize: "20px",
      },
      _24px:{
        fontSize: "24px",
      }
    },
    borderBottom: {
      borderBottom: "1px solid black",
    },
    paddingBottom: {
      _10px :{
        paddingBottom: "10px",
      },
      _30px :{
        paddingBottom: "30px",
      },
      _20px :{
        paddingBottom: "20px",
      },
      _50px :{
        paddingBottom: "50px",
      },
    },
    paddingLeft: {
      _5px: {
        paddingLeft: "5px",
      },
      _10px: {
        paddingLeft: "10px",
      },
      _30px: {
        paddingLeft: "30px",
      },
      _44px: {
        paddingLeft: "44px",
      },
      _50px: {
        paddingLeft: "50px",
      },
      _51px: {
        paddingLeft: "51px",
      },
      _70px: {
        paddingLeft: "70px",
      },
      _100px: {
        paddingLeft: "100px",
      },
      _115px: {
        paddingLeft: "115px",
      },
      _130px: {
        paddingLeft: "130px",
      },
      _140px: {
        paddingLeft: "140px",
      },
      _150px: {
        paddingLeft: "150px",
      },
      _146px :{
        paddingLeft: "146px",
      },
      _174px :{
        paddingLeft: "174px",
      },
      _215px :{
        paddingLeft: "215px",
      },
    },
    paddingRight: {
      _5px:{
        paddingRight: "5px",
      },
      _10px:{
        paddingRight: "10px",
      },
      _15px:{
        paddingRight: "15px",
      },
      _20px:{
        paddingRight: "20px",
      },
      _25px:{
        paddingRight: "25px",
      },
      _30px:{
        paddingRight: "30px",
      },
      _35px:{
        paddingRight: "35px",
      },
      _40px:{
        paddingRight: "40px",
      },
      _50px:{
        paddingRight: "50px",
      },
      _45px:{
        paddingRight: "45px",
      },
      _70px:{
        paddingRight: "70px",
      },
      _80px:{
        paddingRight: "80px",
      },
      _75px:{
        paddingRight: "75px",
      },
      _115px:{
        paddingRight: "115px",
      },
      _160px:{
        paddingRight: "160px",
      },
    },

    padding: {
      _0px: {
        padding: "0px",
      },
      _5px: {
      padding: "5px",
      }
    },

    width: {
      _25px: {
        width: "25px"
      },
      _30px: {
        width: "30px"
      },
      _36px: {
        width: "36px"
      },
      _75px: {
        width: "75px"
      },
      _90px: {
        width: "90px"
      },
      _100px: {
        width: "100px"
      },
      _120px: {
        width: "120px"
      },
      _150px: {
        width: "150px"
      },
      _160px: {
        width: "160px"
      },
      _170px: {
        width: "170px"
      },
      _220px: {
        width: "220px"
      },
      _300px: {
        width: "300px"
      },
      _340px: {
        width: "340px"
      },
      _455px: {
        width: "455px"
      },
    },
    height: {
      _25px: {
        height: "25px"
      },
      _26px: {
        height: "26px"
      },
      _45px: {
        height: "45px"
      },
      _50px: {
        height: "50px"
      },
      _55px: {
        height: "55px"
      },
      _60px: {
        height: "60px"
      },
      _70px: {
        height: "70px"
      },
      _120px: {
        height: "120px"
      },
      _165px: {
        height: "165px"
      },
    },
    marginLeft: {
      _10px: {
        marginLeft: "10px"
      },
      _20px: {
        marginLeft: "20px"
      },
      _245px: {
        marginLeft: "245px"
      },
    },
    marginTop: {
      _10px: {
        marginTop: "10px"
      },
      _20px: {
        marginTop: "20px"
      }
    },
    paddingTopCondition: (isDate?: boolean) => {
        return {
          paddingTop: isDate ? "0px" : "18px",
        }
    },
    marginRight: {
      _1px: {
        marginRight: "1px"
      },
      _5px: {
        marginRight: "5px"
      },
      _10px: {
        marginRight: "10px"
      },
      _48px: {
        marginRight: "48px"
      },
    },
    marginBottom: {
      _1px: {
        marginBottom: "1px"
      },
      _5px: {
        marginBottom: "5px"
      },
      _10px: {
        marginBottom: "10px"
      },
      _20px: {
        marginBottom: "20px"
      },
      _30px: {
        marginBottom: "30px"
      },
      _50px: {
        marginBottom: "50px"
      },
    },
    alignItems: {
      center: {
        alignItems: "center"
      },
      end: {
        alignItems: "end"
      },
      start: {
        alignItems: "start"
      }
    },
    font_italic: {
      fontStyle: "italic"
    },
    tdContent:{
      border:"1px solid",
      padding: "4px",
      verticalAlign: "top",
      whiteSpace:"pre-line" as any
    },
    th: {
      border:"1px solid",
      padding: "4px",
      textAlign: "center" as any
    },
    borderRightDashed: {
      borderRight: "2px dashed"
    },
    border1:{
      border: "1px solid black",
      padding: "2px 4px",
    },
    borderRightNone: {
      border: "1px solid black",
      borderRight: "none"
    },
    borderLeftNone: {
      border: "1px solid black",
      borderLeft: "none"
    },
    borderRight: {
      borderRight: "1px solid black"
    },
    minWidth: {
      _15px: {
        minWidth: "15px"
      },
      _20px: {
        minWidth: "20px"
      },
      _23px: {
        minWidth: "23px"
      },
      _25px: {
        minWidth: "25px"
      },
      _30px: {
        minWidth: "30px"
      },
      _35px: {
        minWidth: "35px"
      },
      _40px: {
        minWidth: "40px"
      },
      _45px: {
        minWidth: "45px"
      },
      _50px: {
        minWidth: "50px"
      },
      _55px: {
        minWidth: "55px"
      },
      _60px: {
        minWidth: "60px"
      },
      _65px: {
        minWidth: "65px"
      },
      _70px: {
        minWidth: "70px"
      },
      _75px: {
        minWidth: "75px"
      },
      _80px: {
        minWidth: "80px"
      },
      _85px: {
        minWidth: "85px"
      },
      _90px: {
        minWidth: "90px"
      },
      _95px: {
        minWidth: "95px"
      },
      _100px: {
        minWidth: "100px"
      },
      _105px: {
        minWidth: "105px"
      },
      _110px: {
        minWidth: "110px"
      },
      _115px: {
        minWidth: "115px"
      },
      _120px: {
        minWidth: "120px"
      },
      _125px: {
        minWidth: "125px"
      },
      _130px: {
        minWidth: "130px"
      },
      _135px: {
        minWidth: "135px"
      },
      _140px: {
        minWidth: "140px"
      },
      _145px: {
        minWidth: "145px"
      },
      _150px: {
        minWidth: "150px"
      },
      _155px: {
        minWidth: "155px"
      },
      _160px: {
        minWidth: "160px"
      },
      _165px: {
        minWidth: "165px"
      },
      _170px: {
        minWidth: "170px"
      },
      _175px: {
        minWidth: "175px"
      },
      _180px: {
        minWidth: "180px"
      },
      _185px: {
        minWidth: "185px"
      },
      _200px: {
        minWidth: "200px"
      },
      _215px: {
        minWidth: "215px"
      },
      _225px: {
        minWidth: "225px"
      },
      _230px: {
        minWidth: "230px"
      },
      _265px: {
        minWidth: "265px"
      },
      _270px: {
        minWidth: "270px"
      },
      _275px: {
        minWidth: "275px"
      },
      _300px: {
        minWidth: "300px"
      },
      _315px: {
        minWidth: "315px"
      },
      _330px: {
        minWidth: "330px"
      },
      _335px: {
        minWidth: "335px"
      },
      _355px: {
        minWidth: "355px"
      },
      _365px: {
        minWidth: "365px"
      },
      _370px: {
        minWidth: "370px"
      },
      _375px: {
        minWidth: "375px"
      },
      _385px: {
        minWidth: "385px"
      },
      _415px: {
        minWidth: "415px"
      },
      _455px: {
        minWidth: "455px"
      },
      _460px: {
        minWidth: "460px"
      },
      _475px: {
        minWidth: "475px"
      },
      _490px: {
        minWidth: "490px"
      },
      _500px: {
        minWidth: "500px"
      },
      _515px: {
        minWidth: "515px"
      },
      _520px: {
        minWidth: "520px"
      },
      _535px: {
        minWidth: "535px"
      },
      _573px: {
        minWidth: "573px"
      },
      _630px: {
        minWidth: "630px"
      },
      _675px: {
        minWidth: "675px"
      },
    },
    textUppercase:{
      textTransform: "uppercase" as "uppercase"
    },
    colorRed:{
      color: "red"
    },
    fontBoldCondition: (condition: boolean) => {
      return {
        fontWeight: condition ? "bold" : ""
      }
    },
    divBorder:{
      border: "1px solid black"
    },
    borderLeft:{
      borderLeft: "1px solid black"
    },
    verticalTop: {
      verticalAlign: "top"
    }
};

export const GIOI_TINH = {
  MALE:"MALE",
  FEMALE:"FEMALE"
}
export interface PropsHoaDon {
  objectId: { idPhieu: string, personId: string};
  show: boolean;
  handleClose: () => void;
}

export const stylePrint = `<style>
@media print {
  @page {
    margin: 7mm;
  }
}</style>`

export const stylePrintLandscape = `<style>
@media print {
  @page {
    margin: 7mm;
    size: landscape;
  }
}</style>`

export const stylePrintLandscapeBgColor = `<style>
@media print {
  @page {
    margin: 7mm;
    size: landscape;
  }
  
  body { 
    -webkit-print-color-adjust: exact; 
  }

  .bg-color-purple {
    background-color: #e6e0ed !important;
  }

  .bg-color-yellow {
    background-color: #ecf0df !important;
  }
}</style>`

export const stylePrintLandscapeA5 = `<style>
@media print {
  @page {
    margin: 7mm;
    size: landscape A5;
  }
}</style>`

export const stylePrintA5 = `<style>
@media print {
  @page {
    margin: 5mm;
    size: A5;
  }
}</style>`

export const stylePrintA3 = `<style>
@media print {
  @page {
    margin: 7mm;
    size: A3;
  }
}</style>`