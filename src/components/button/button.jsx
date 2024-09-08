import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: ${({ width = "100%" }) => width};
  height: 32px;

  border: 1px solid #000;
  background-color: #eee;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
`;

ButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
