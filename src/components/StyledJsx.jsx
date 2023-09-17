export const StyledJsx = () => {
  return (
    <>
      <div class="container">
        <p class="p">-styled jsx -</p>
        <button>(#^^#)</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px;
          border-radius: 20px;
          padding: 8px;
          padding: 20px;
          margin: 8px;
        }
        .p {
          text-emphasis-color: pink;
          border: solid 2px;
        }
      `}</style>
    </>
  );
};
