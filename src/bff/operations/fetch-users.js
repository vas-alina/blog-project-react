import { getUsers } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constans/role";

export const fetchUsers = async (userSession) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  const users = await getUsers();

  return {
    error: null,

    res: users,
  };
};
