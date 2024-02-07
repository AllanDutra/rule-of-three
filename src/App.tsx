import { ActiveStage } from "./components/active-stage";
import { AppLogo } from "./components/app-logo";
import { Title } from "./components/title";
import { GlobalStyle } from "./shared/global/global-style";
import { RuleOfThreeProvider } from "./shared/hooks/useRuleOfThree";

function App() {
  return (
    <RuleOfThreeProvider>
      <GlobalStyle />

      <AppLogo />

      <Title />

      <ActiveStage />
    </RuleOfThreeProvider>
  );
}

export default App;
