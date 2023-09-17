/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import styled from "styled-components";

export const Emotion = () => {
  //cssの書き方もできる
  const containerStyle = css`
    border: solid 2px;
    border-radius: 20px;
    padding: 8px;
    padding: 20px;
    margin: 8px;
  `;

  //JSのインラインの書き方もできる
  const ptag = css({
    color: "blue",
    backgroundColor: "pink"
  });
  return (
    <div css={containerStyle}>
      <p css={ptag}>-emotion-</p>
      <Button>((+_+))</Button>
    </div>
  );
};

const Button = styled.button`
  color: gold;
`;
