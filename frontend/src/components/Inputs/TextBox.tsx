import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: FieldError,
    errorMessage?: string;
    type: string;
    name: string; // Include the 'name' prop in the type definition
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TextBox: FC<Props> = ({ error, errorMessage, type, name, ...props }) => {

    const inputClassName = `w-full p-2 border rounded-md focus:outline-none focus:ring ${error ? 'border-red-500' : 'focus:border-blue-300'}`;


    if (type === "textarea") {
        return (
            <>
                <textarea className={inputClassName} style={{ height: 400 }}  {...props}></textarea>
                {error && <span className="mt-1 text-red-500">{errorMessage}</span>}
            </>
        )
    }

    if(type === 'number') {
        return (
            <>
                <input
                    className={inputClassName}
                    {...props}
                    step=".01"
                    type="number"
                />
                {error && <span className="mt-1 text-red-500">{errorMessage}</span>}
            </>
        )
    }
    
    return (
        <>
            <input
                className={inputClassName}
                {...props}
            />
            {error && <span className="mt-1 text-red-500">{errorMessage}</span>}
        </>
    )
}
