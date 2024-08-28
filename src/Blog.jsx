import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Authorization, Registration, Users } from "./pages";
import { Post } from "./pages";
import { useDispatch } from "react-redux";
import { setUser } from "./action";
import styled from "styled-components";
import { useLayoutEffect } from "react";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #ffff;
`;
const Page = styled.div`
  padding: 120px 0 20px;
`;

export const Blog = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem("userData");

    if (!currentUserData) {
      return;
    }

    const currentUserData = JSON.parse(currentUserDataJSON)
    dispatch(
      setUser({
        ...currentUserData,
        roleId: Number(currentUserData.roleId),
      })
    );
  }, [dispatch]);
  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  );
};
