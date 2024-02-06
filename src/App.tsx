import { AppLogo } from "./components/app-logo";
import { StageOne } from "./components/stage-one";
import { StageThree } from "./components/stage-three";
import { StageTwo } from "./components/stage-two";
import { Title } from "./components/title";
import { GlobalStyle } from "./shared/global/global-style";

function App() {
  return (
    <>
      <GlobalStyle />

      <AppLogo />

      <Title />

      {/* <StageOne /> */}

      {/* <StageTwo /> */}

      <StageThree />
    </>
  );
}

export default App;
