import { createContext, ReactNode, useContext, useState } from "react";

interface IRuleOfThreeContextData {
  activeStage: number;
  setActiveStage: React.Dispatch<React.SetStateAction<number>>;

  sourceUnit: string;
  setSourceUnit: React.Dispatch<React.SetStateAction<string>>;
  destinyUnit: string;
  setDestinyUnit: React.Dispatch<React.SetStateAction<string>>;

  firstValue: string;
  setFirstValue: React.Dispatch<React.SetStateAction<string>>;
  secondValue: string;
  setSecondValue: React.Dispatch<React.SetStateAction<string>>;

  valueToConvert: string;
  setValueToConvert: React.Dispatch<React.SetStateAction<string>>;

  finish(): void;
}

type RuleOfThreeProviderProps = {
  children: ReactNode;
};

const RuleOfThreeContext = createContext({} as IRuleOfThreeContextData);

function RuleOfThreeProvider({ children }: RuleOfThreeProviderProps) {
  const [activeStage, setActiveStage] = useState(1);

  const [sourceUnit, setSourceUnit] = useState("");
  const [destinyUnit, setDestinyUnit] = useState("");

  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const [valueToConvert, setValueToConvert] = useState("");

  function finish() {
    setActiveStage(1);
    setSourceUnit("");
    setDestinyUnit("");
    setFirstValue("");
    setSecondValue("");
    setValueToConvert("");
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
        firstValue,
        setFirstValue,
        secondValue,
        setSecondValue,
        valueToConvert,
        setValueToConvert,
        finish,
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
