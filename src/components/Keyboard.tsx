import React from "react";
import styled from "@emotion/styled";
import { SimpleKey } from "./KeyboardTypes";

type SimpleKeyMap = {
  [Key in SimpleKey]: { top: number; right: number };
};

const simpleKeyMap: Partial<SimpleKeyMap> = {
  a: {
    top: 0,
    right: 0,
  },
};

const KeyboardImage = require("../images/keyboard_img.png");

const Finger = styled.div`
  position: absolute;
  width: 50px;
  height: 300px;

  top: 0px;
  right: 0px;

  background-color: #0000ff44;
  border-style: solid;
  border-color: #0000ff77;

  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export default function Keyboard() {
  return (
    <div style={{ position: "relative", width: 900 }}>
      <img style={{ width: 900 }} src={KeyboardImage} />

      <Finger />
    </div>
  );
}
