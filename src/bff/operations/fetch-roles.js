import { getRoles } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constans/role";

export const fetchRoles = async (hash) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  const roles = await getRoles();

  return {
    error: null,

    res: roles,
  };
};
