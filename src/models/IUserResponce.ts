import {IUser} from "./IUser.ts";

export interface IUserResponce {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}