import {BoxItem} from './style'

function Carro(props) {
  console.log(props);
  return (
    <BoxItem>
      <h2>Volksvagem</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>adicionadoPor: {props.adicionadoPor}</li>
      </ul>
    </BoxItem>
  );
}

export default Carro;
