import Carro from "../Carro/Carro";
import {BoxGaragem} from './style'
import {BotaoApresentacao} from './style'

function Garagem(props) {
  return (
    <BoxGaragem>
      <h1>Garagem da {props.nome}</h1>
      <BotaoApresentacao onClick={props.mensagemAprentacao}>Mensagem</BotaoApresentacao>
      <Carro
        adicionadoPor={props.nome}
        cor={"Vermelho"}
        ano={2022}
        flex={"true"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Verde"}
        ano={2020}
        flex={"false"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Amarelo"}
        ano={2009}
        flex={"false"}
      />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
    </BoxGaragem>
  );
}

export default Garagem;
