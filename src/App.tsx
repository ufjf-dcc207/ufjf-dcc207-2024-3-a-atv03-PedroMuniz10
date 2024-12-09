import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";

type AnimaisTupleType = [string, string, number, boolean];

const ANIMAIS: AnimaisTupleType[] = [
  ["🦁", "Leão", 190.0, true],
  ["🦩", "Flamingo", 12.0, true],
  ["🦒", "Girafa", 1200.0, true],
  ["🦜", "Papagaio", 0.4, false],
];

function App(){
  const exA1: AnimaisTupleType[] = ANIMAIS.filter(animal => animal[2]<200.0);
  const exB2: AnimaisTupleType[] = ANIMAIS.filter(animal => animal[2]<200.0);
    

  return (
    <div className="app">
      <Exibicao 
        inicio={new Date("2024-12-02T08:00:00.000-03:00")}
        fim={new Date("2024-12-02T12:00-03:00")}
        local="A1"
      >{exA1.map((animal) => (
        <Animal
        key={animal[1]}
        icone={animal[0]}
        nome={animal[1]}
        peso={animal[2]}
        emExtincao={animal[3]}
    />
      ))}
      </Exibicao>
      
      <Exibicao
        inicio={new Date("2024-12-02T14:00-03:00")}
        fim={new Date("2024-12-02T16:00-03:00")}
        local="B2"
      >{exB2.map((animal) => (
        <Animal
        key={animal[1]}
        icone={animal[0]}
        nome={animal[1]}
        peso={animal[2]}
        emExtincao={animal[3]}
    />
      ))}
      </Exibicao>
    </div>
  );
}

export default App;