import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import SideInfo from "./SideInfo";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f395ba 0%, #fed182 100%);
  border-radius: 16px;

  @media screen and (min-width: 425px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const UserProf = ({ user, editable }) => {
  return (
    <Card>
      <Avatar firstName={user.firstName} lastName={user.lastName} />
      <SideInfo
        editable={editable}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        address={user.address}
        phone={user.phone}
      />
    </Card>
  );
};

export default UserProf;
