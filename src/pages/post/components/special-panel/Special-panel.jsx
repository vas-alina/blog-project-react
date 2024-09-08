import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../../action";
import { Icon } from "../../../../components";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router";
import { checkAccess } from "../../../../utils";
import { ROLE } from "../../../../constans";
import styled from "styled-components";
import { selectUserRole } from "../../../../selectors";
const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();
  const userRole = useSelector(selectUserRole)
  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: " Удалить статью?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() => {
            navigate("/");
          });
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };
  const isAdmin = checkAccess([ROLE.ADMIN], userRole);
  return (
    <div className={className}>
      <div className="published-at">
        {publishedAt && (
          <Icon
            inactive={true}
            id="fa-calendar-o"
            margin="0 7px 0 0"
            size="18px"
            onClick={() => {}}
          />
        )}
        {publishedAt}
      </div>
     { isAdmin && (<div className="buttons">
        {editButton}
        {publishedAt && (
          <Icon
            id="fa-trash-o"
            size="21px"
            margin="0 0 0 7px"
            onClick={() => onPostRemove(id)}
          />
        )}
      </div>
  )}
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => margin};

  & .published-at {
    display: flex;
    font-size: 18px;
    align-items: baseline;
  }

  & .buttons {
    display: flex;
  }

  & i {
    position: relative;
    top: -1px;
  }
`;
 
SpecialPanelContainer.propTypes = {
  id: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  editButton: PropTypes.node.isRequired,
}