import styled from "styled-components";
import Estudante from "../Estudante/Estudante";
import {BotaoApresentar} from "./style"
import {Titulo} from "./style"
import {FundoColorido} from "./style"

function Turma(props) {
  return (
    <FundoColorido>
      <Titulo>Turma {props.turma}</Titulo>
      <h4>Responsável:{props.responsavel}</h4>
      <BotaoApresentar onClick={props.apresentar}>Apresentar</BotaoApresentar>

      <Estudante
        nome={"Clarinha"}
        idade={40}
        corDaRoupa={"preta"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Marcelo"}
        idade={25}
        corDaRoupa={"azul"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Luiz"}
        idade={18}
        corDaRoupa={"verde"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Muri"}
        idade={39}
        corDaRoupa={"amarelo"}
        criadoPor={props.responsavel}
      />
    </FundoColorido>
  );
}

export default Turma;
