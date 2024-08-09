import { User } from "./user.model";

export interface GetUsersResponseDTO {
  correlationIs: string,
  users: User[]
}
