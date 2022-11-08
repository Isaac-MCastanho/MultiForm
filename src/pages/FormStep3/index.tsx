import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import { ButtonsContainer, HeadingPage } from "../../global.styles";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      navigate("/final");
    } else {
      alert("Preencha seus dados.");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };
  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <HeadingPage>
          <p>Passo 3/4</p>
          <h1>Legal {state.name}, onde te achamos?</h1>
          <p>Preencha com seus dados para conseguirmos entrar em contato.</p>
        </HeadingPage>

        <hr />

        <label htmlFor="">
          Qual o seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="">
          Qual o seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <ButtonsContainer>
          <Link className="backButton" to="/step2">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Finalizar Cadastro</button>
        </ButtonsContainer>
      </C.Container>
    </Theme>
  );
};
