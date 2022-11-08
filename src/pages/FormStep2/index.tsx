import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";
import { ButtonsContainer, HeadingPage } from "../../global.styles";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Preencha seus dados.");
    }
  };

  const setLevel = (level: number) => {
    dispatch({ type: FormActions.setLevel, payload: level });
  };

  return (
    <Theme>
      <C.Container>
        <HeadingPage>
          <p>Passo 2/4</p>
          <h1>{state.name}, o que melhor descreve você?</h1>
          <p>
            Escolha a opção que melhor condiz com seu estado atual,
            profissionalmente.
          </p>
        </HeadingPage>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar a menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => {
            setLevel(0);
          }}
        />
        <SelectOption
          title="Sou programador"
          description="Já programo a 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => {
            setLevel(1);
          }}
        />

        <ButtonsContainer>
          <Link className="backButton" to="/">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Próximo</button>
        </ButtonsContainer>
      </C.Container>
    </Theme>
  );
};
