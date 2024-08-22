import { useDispatch } from "react-redux";
import { Icon } from "../../../../components";
import { TableRow } from "../table-row/Table-row";
// import { ROLE } from "../../../../constans/role"
import styled from "styled-components";

const UserRowContainer = ({
  className,
  login,
  registeredAt,
  roleId: userRoreId,
  roles,
}) => {
  const dispatch = useDispatch();

  const onRoleChange = () => {};

  return (
    <TableRow>
      <div className="login-column">{login}</div>
      <div className="registered-at-column">{registeredAt}</div>
      <div className="role-column">
        <select value={userRoreId} onChange={onRoleChange}>
          {roles.map(({ id: roleId, name: roleName }) => (
            <option key={roleId} value={roleId}>
              {roleName}
            </option>
          ))}
        </select>
        <Icon
          id="fa-floppy-o"
          margin="10px 0 0 0"
          onClick={() => dispatch(/*TODO*/)}
        />
      </div>
      <Icon
        id="fa-trash-0"
        margin="10px 0 0 0"
        onClick={() => dispatch(/*TODO*/)}
      />
    </TableRow>
  );
};
export const UserRow = styled(UserRowContainer)``;
