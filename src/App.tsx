import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";

type ExibicaoTuplaType = [string, string, string, AnimaisTupleType[] ];
type AnimaisTupleType = [string, string, number, boolean];
const EXIBICOES:ExibicaoTuplaType[] = [
  [
    "A1", 
    "2024-12-06T08:00.00.000-03.00", 
    "2024-12-02T12:00-03:00",
    [
      ["🦁", "Leão", 190.0, true],
      ["🦩", "Flamingo", 12.0, true],
    ],
  ],
  [
    "B2",
    "2024-12-02T14:00-03:00",
    "2024-12-02T16:00-03:00",
    [
      ["🦒", "Girafa", 1200.0, true],
      ["🦜", "Papagaio", 0.4, false],
    ],
  ],
];

function App(){
  return (
    <div className="app">
      {EXIBICOES.map((exibicao) => (
        <Exibicao key={exibicao[0]} inicio={new Date(exibicao[1])} fim={new Date(exibicao[2])}
        local={exibicao[0]}
        >
          {exibicao[3].map((animal) => (
            <Animal key={animal[1]} icone={animal[0]} nome={animal[1]}
            peso={animal[2]} emExtincao={animal[3]}
            />
          ))}
        </Exibicao>
      ))}
    </div>
  );
}
      
export default App;