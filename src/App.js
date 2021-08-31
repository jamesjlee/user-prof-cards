import React, { useState, useRef, useEffect } from "react";
import UserProf from "./components/UserProf";
import styled from "styled-components";
import faker from "faker";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, addUser } from "./features/userSlice";

const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;
  min-width: 100vw;
`;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(
      addUser({
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      })
    );
  };

  return (
    <Container>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <UserProf user={user} />
            </div>
          );
        })}
      <StyledButton onClick={() => handleAddClick()}>Add a User</StyledButton>
    </Container>
  );
}

export default App;
