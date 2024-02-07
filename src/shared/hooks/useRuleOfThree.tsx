import { createContext, ReactNode, useContext, useState } from "react";

interface IRuleOfThreeContextData {
  activeStage: number;
  setActiveStage: React.Dispatch<React.SetStateAction<number>>;

  sourceUnit: string;
  setSourceUnit: React.Dispatch<React.SetStateAction<string>>;

  destinyUnit: string;
  setDestinyUnit: React.Dispatch<React.SetStateAction<string>>;

  handleFinish(): void;
}

type RuleOfThreeProviderProps = {
  children: ReactNode;
};

const RuleOfThreeContext = createContext({} as IRuleOfThreeContextData);

function RuleOfThreeProvider({ children }: RuleOfThreeProviderProps) {
  const [activeStage, setActiveStage] = useState(1);

  const [sourceUnit, setSourceUnit] = useState("");
  const [destinyUnit, setDestinyUnit] = useState("");

  function handleFinish() {
    setActiveStage(1);
    setSourceUnit("");
    setDestinyUnit("");
  }

  return (
    <RuleOfThreeContext.Provider
      value={{
        activeStage,
        setActiveStage,
        sourceUnit,
        setSourceUnit,
        destinyUnit,
        setDestinyUnit,
        handleFinish,
      }}
    >
      {children}
    </RuleOfThreeContext.Provider>
  );
}

function useRuleOfThree() {
  const context = useContext(RuleOfThreeContext);

  return context;
}

export { RuleOfThreeProvider, useRuleOfThree };
