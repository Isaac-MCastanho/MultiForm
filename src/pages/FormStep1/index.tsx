import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import { ButtonsContainer, HeadingPage } from "../../global.styles";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Preencha seus dados.");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };
  return (
    <Theme>
      <C.Container>
        <HeadingPage>
          <p>Passo 1/4</p>
          <h1>Vamos começar com seu nome</h1>
          <p>Preencha o campo abaixo com seu nome completo.</p>
        </HeadingPage>

        <hr />

        <label htmlFor="">
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <ButtonsContainer>
          <button onClick={handleNextStep}>Próximo</button>
        </ButtonsContainer>
      </C.Container>
    </Theme>
  );
};
