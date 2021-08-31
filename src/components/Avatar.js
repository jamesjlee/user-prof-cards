import React from "react";
import styled from "styled-components";

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 50px;
`;

const Container = styled.div`
  width: 25%;
  height: 100%;

  @media screen and (min-width: 425px) {
    height: 25%;
    width: 100%;
  }
`;

const Avatar = ({ firstName, lastName }) => {
  const firstInitial = firstName.substring(0, 1);
  const lastInitial = lastName.substring(0, 1);

  return (
    <Container>
      <UserAvatar>
        {firstInitial}.{lastInitial}.
      </UserAvatar>
    </Container>
  );
};

export default Avatar;
