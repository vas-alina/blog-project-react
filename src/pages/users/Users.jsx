import { Content, H2 } from "../../components";
import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const UsersContainer = ({ className }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const requestServer = useServerRequest();
  //   const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([requestServer("fetchUser"), requestServer("fetchRoles")]).then(
      ([usersRes, rolesRes]) => {
        if (usersRes.error || rolesRes.error) {
          setErrorMessage(usersRes.error || rolesRes.error);
          return;
        }

        setUsers(usersRes.res);
        setRoles(rolesRes.res);
      }
    );
  }, [requestServer]);

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <H2>Пользователи</H2>
        <div>
          <TableRow>
            <div className="login-column">Логин</div>
            <div className="registered-at-column">Дата регистрации</div>
            <div className="role-column">Роль</div>
          </TableRow>
          {users.map(({ id, login, registeredAt, roleId }) => (
            <UserRow
              key={id}
              login={login}
              registeredAt={registeredAt}
              roleId={roleId}
              roles={roles}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 570px;
`;
