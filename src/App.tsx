import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";
import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <FormProvider>
      <GlobalStyle />
      <Router />
    </FormProvider>
  );
};

export default App;
