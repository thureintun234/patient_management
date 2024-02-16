export type FormData = {
  name: string;
  email: string;
  password: string;
  role: { value: string; label: string };
};
export type Admin = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
};
