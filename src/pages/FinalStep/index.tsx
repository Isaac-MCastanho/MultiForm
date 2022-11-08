import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import { ButtonsContainer, HeadingPage } from "../../global.styles";

export const FinalStep = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
    if (state.email === "" || state.github === "") {
      navigate("/step3");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    });
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    }
  };

  return (
    <Theme>
      <C.Container>
        <HeadingPage>
          <p>Passo 4/4</p>
          <h1>Pronto {state.name}, podemos finalizar!</h1>
          <p>Confirme seus dados e envie. O sucesso é logo ali!</p>
        </HeadingPage>

        <hr />

        <div className="container">
          <h4>
            <span>Nome:</span> {state.name}
          </h4>

          <h4>
            <span>Nivel:</span>
            {state.level === 0 && " Sou iniciante 🥳"}
            {state.level === 1 && " Sou programador 😎"}
          </h4>
          <h4>
            <span>Email:</span> {state.email}
          </h4>
          <h4>
            <span>Github:</span> {state.github}
          </h4>
        </div>

        <ButtonsContainer>
          <Link className="backButton" to="/step2">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Enviar</button>
        </ButtonsContainer>
      </C.Container>
    </Theme>
  );
};
