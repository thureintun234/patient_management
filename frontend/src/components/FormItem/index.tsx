import {  FC,ReactNode } from "react"

type Prop = {
    children: ReactNode;
    label:string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const FormItem: FC<Prop> = ({ children,label,...props }) => {
    return (
        <div {...props}>
            <label className="block text-gray-600 font-medium mb-2">
                {label}
            </label>
            {children}
        </div>
    )
}