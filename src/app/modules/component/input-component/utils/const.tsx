import Input from "../components/Input";
import ListInput from "../components/ListInput";
import RadioText from "../components/RadioText";
import Select from "../components/Select";
import Textarea from "../components/Textarea";

export const TYPE = {
    input: "input",
    textarea: "textarea",
    select: "select",
    checkbox: "checkbox",
    radio: "radio",
    radioText: "complex",
    listInput: "listInput"
}

export enum INPUT_TYPE { 
    NUMBER = 'number',
    STRING = 'string'
}

export const SELECT_TYPE = ["list"];

export const LAYOUT = {
    horizontal: "horizontal",
    vertical: "vertical",
}

const INPUT = {
    key: TYPE.input,
    data: null,
    component: <Input />
};

const TEXTAREA = {
    key: TYPE.textarea,
    data: null,
    component: <Textarea />
};

const SELECT = {
    key: TYPE.select,
    data: null,
    component: <Select />
};

const RADIO = {
    key: TYPE.radio,
    data: null,
    component: <Select />
};

const CHECKBOX = {
    key: TYPE.checkbox,
    data: null,
    component: <Select />
};

const RADIO_TEXT = {
    key: TYPE.radioText,
    data: null,
    component: <RadioText />
};

const LIST_INPUT = {
    key: TYPE.listInput,
    data: null,
    component: <ListInput />
};

const INPUT_LIST = [INPUT, TEXTAREA, SELECT, RADIO_TEXT, RADIO, CHECKBOX, LIST_INPUT]
const componentMapping = new Map(INPUT_LIST.map(item => [item.key, item]))

export { componentMapping }