import React, { forwardRef, useState, useImperativeHandle } from "react";
import styled from "styled-components";
import css from "styled-components";
import faker from "faker";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 39.5px;
  height: 300px;
  width: 75%;
  border-radius: 0 16px 16px 0;

  @media screen and (min-width: 425px) {
    height: 75%;
    width: 100%;
  }
`;

const Name = styled.div`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 46px;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
`;

const NonEditable = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
`;

const Logo = styled.div`
  width: 66px;
  height: 41px;
  background: linear-gradient(30.85deg, #666fcf 10.93%, #ff2539 85.6%);
  left: 0%;
  right: 83.33%;
  top: 5.5%;
  bottom: 5.5%;
`;

const Company = styled.div`
  font-family: SF Pro Text;
  font-size: 18px;
  line-height: 21px;
  color: #555a66;
  font-weight: bold;
`;

const Slogan = styled.div`
  font-family: SF Pro Text;
  font-size: 18px;
  line-height: 21px;
  color: #555a66;
`;

const Footer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
`;

const InnerFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideInfo = (props) => {
  const compName = faker.company.companyName();

  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [address, setAddress] = useState(props.address);
  const [phone, setPhone] = useState(props.phone);
  const [companyName, setCompanyName] = useState(compName);

  return (
    <Info>
      <Name>
        {firstName} {lastName}
      </Name>
      {props.editable ? (
        <>
          <Input
            editable={props.editable}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            editable={props.editable}
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <Input
            editable={props.editable}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </>
      ) : (
        <>
          <NonEditable>{email}</NonEditable>
          <NonEditable>{address}</NonEditable>
          <NonEditable>{phone}</NonEditable>
        </>
      )}
      <a href="marianne.org" />
      <Footer>
        <Logo />
        <InnerFooter>
          <Company>{companyName}</Company>
          <Slogan>Quality-focused value-added synergy</Slogan>
        </InnerFooter>
      </Footer>
    </Info>
  );
};

export default SideInfo;
