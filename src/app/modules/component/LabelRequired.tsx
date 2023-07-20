import { FC } from "react";

type Props = {
    label: string;
    isRequired?: boolean
}

const LabelRequired: FC<Props> = ({ label, isRequired }) => {
    return (
        <span>
            <span>{label}</span>
            {isRequired && <span className="color-red"> *</span>}
        </span>
    )
};

export default LabelRequired
