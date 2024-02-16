import { Volunteer } from "../volunteer/types";

export type Patient = {
    id: number;
    name: string;
    age: number;
    sex: string;
    address: string;
    volunteer: Volunteer;
    is_VOT : string;
  };
  