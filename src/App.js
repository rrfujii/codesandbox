import { CssModules } from "./components/CssModule";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComp } from "./components/StyledComp";
import { Emotion } from "./components/Emotion";
import "./styles.css";

const containerStyle = {
  border: "solid 2px",
  borderRadius: "20px",
  padding: "8px"
};
export default function App() {
  return (
    <>
      <div className="App" style={containerStyle}>
        <InlineStyle />
      </div>
      <div>
        <CssModules />
      </div>
      <div>
        <StyledJsx />
      </div>
      <div>
        <StyledComp />
      </div>
      <div>
        <Emotion />
      </div>
    </>
  );
}
