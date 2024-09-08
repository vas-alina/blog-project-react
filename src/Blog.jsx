import { Routes, Route } from "react-router-dom";
import { Error, Header, Footer, Modal } from "./components";
import { Authorization, Registration, Users, Main, Post } from "./pages";
import { useDispatch } from "react-redux";
import { setUser } from "./action";
import styled from "styled-components";
import { ERROR } from "./constans";
import { useLayoutEffect } from "react";

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
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

    if (!currentUserDataJSON) {
      return;
    }
    const currentUserData = JSON.parse(currentUserDataJSON);
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
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<Post />} />
          <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST}/>} />
        </Routes>
      </Page>
      <Footer />
      <Modal />
    </AppColumn>
  );
};
