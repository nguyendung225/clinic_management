import { useContext, useEffect } from "react";
import { AppContext } from "../../../../appContext/AppContext";
import { AnyMessageParams } from "yup/lib/types";

type Props = {
  data: any
}

const SoDoTong = (props: Props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td colSpan={6}>Tầng 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default SoDoTong
