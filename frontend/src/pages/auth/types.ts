import { Admin } from "../dashboard/admin/types";

export type FormData = { email: string; password: string };
export type LoginResponse = {
    admin: Admin , 
    token: string
}
