import { addSession, getSession, deleteSession } from "./api";

export const sessions = {
  create(user) {
    const hash = Math.random().toFixed(50);

    addSession(hash, user);

    return hash;
  },
  async remove(hash) {
    const session = await getSession(hash);
    if (!session) {
      return;
    }

    deleteSession(session.id);
  },
  async access(hash, accessRoles) {
    const dbsession = await getSession(hash);
    console.log(hash, accessRoles, dbsession);
    return !!dbsession.user && accessRoles.includes(dbsession.user.roleId);
  },
};
