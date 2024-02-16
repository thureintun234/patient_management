import { RecordDetails } from "../recordDetails/types";

export type FormData = {
  name: string;
};

export type Record = {
  id: number;
  name: string;
};

export type RecordCollection = {
  id: number;
  name: string;
};


export type History ={
  createdAt:string;
  type:string;
  body:string;
}