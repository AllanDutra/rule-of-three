import { AppLogo } from "./components/app-logo";
import { StageOne } from "./components/stage-one";
import { Title } from "./components/title";
import { GlobalStyle } from "./shared/global/global-style";

function App() {
  return (
    <>
      <GlobalStyle />

      <AppLogo />

      <Title />

      <StageOne />
    </>
  );
}

export default App;