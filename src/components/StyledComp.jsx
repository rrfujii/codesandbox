import styled from "styled-components";

export const StyledComp = () => {
  return (
    <>
      <StyledContainer>
        <Ptag>-styled comp -</Ptag>
        <button>($・・)/~~~</button>
      </StyledContainer>
    </>
  );
};

//divそのものにstyleをあててそのタグを使う
const StyledContainer = styled.div`
  border: solid 2px;
  border-radius: 20px;
  padding: 8px;
  padding: 20px;
  margin: 8px;
`;
const Ptag = styled.p`
  text-emphasis-color: pink;
  border: solid 2px;
`;
