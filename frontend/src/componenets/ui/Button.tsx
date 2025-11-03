import type { ReactElement } from "react";

interface Buttonprops {
    variant: "primary"|"secondary";
    size: "sm"|"md"|"lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"

}
const sizeStyles = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "p-6"
}
const defaultStyles = "rounded-md flex items-center cursor-pointer transition-all"
export const Button = (props: Buttonprops) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon? <div className="pr-2" >{props.startIcon}</div>: null}{props.text}{props.endIcon}</button>

}

<Button variant="primary" size="md" onClick={() =>{}} text={"asd"}/>