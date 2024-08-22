import { authorize, logout, register } from "./operations";
import { fetchRoles } from "./operations/fetch-roles";
export const server = {
  authorize,
  logout,
  register,
  fetchRoles,
  fetchUsers
};
