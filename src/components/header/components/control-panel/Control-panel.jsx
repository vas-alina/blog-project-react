import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Icon, Button } from "../../../../components";
import { ROLE } from "../../../../constans/role";
import {
  selectUserRole,
  selectUserLogin,
  selectUserSession,
} from "../../../../selectors";
import { logout } from "../../../../action";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const dispatch = useDispatch();
  const session = useSelector(selectUserSession);
  console.log("roleId:", roleId); // Убедитесь, что значение roleId ожидаемое
  console.log("ROLE.GUEST:", ROLE.GUEST);
  return (
    <div className={className}>
      <RightAligned>
        {ROLE.GUEST ? (
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>
            <StyledIcon>
              <Icon
                id="fa-sing-out"
                margin="0 0 0 10px"
                onClick={() => dispatch(logout(session))}
              />
            </StyledIcon>
          </>
        )}
      </RightAligned>
      <RightAligned>
        <StyledIcon onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 0 0 0" />
        </StyledIcon>

        <Link to="/post">
          <Icon id="fa-file-text-o" margin="10px 0 0 16px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-user" margin="10px 0 0 16px" />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
