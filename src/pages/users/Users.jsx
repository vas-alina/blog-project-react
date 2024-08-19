import {  H2 } from "../../components";
import styled from "styled-components";

const UsersContainer = ({ className }) => {
    return (
        <div className={className}>
      <H2>Пользователи</H2>
      <div>
        <div> 
        </div>
        <div>Логин</div>
        <div>Дата регистрации</div>
        <div>Роль</div>
      </div>
      </div>
    )
};

export const User = styled(UsersContainer)``;
