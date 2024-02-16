import { FC } from "react";

type Prop = {
    error: string | null;
    text?: boolean;
}

export const ErrorContainer: FC<Prop> = ({ error, text = false }) => {
    if (!error) {
        return;
    }
    return (
        <div className={`${!text && "bg-red-400 "} ${text?"text-red-400":"text-white"} font-bold rounded-t px-8 py-1 mb-2`} >
            {error}
        </div>
    )
}