import {createGlobalStyle} from 'styled-components'
import Turma from "./Componentes/Turma/Turma";

function App() {
  const responsavel = "João";
  const nomeDaTurma = "Ammal";

  const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box
    }
  `;

  function apresentarTurma() {
    alert(`Bom dia turma! ${nomeDaTurma}`);
  }

  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <Turma
        turma={nomeDaTurma}
        responsavel={responsavel}
        apresentar={apresentarTurma}
        />
    </div>
    </>
  );
}

export default App;
