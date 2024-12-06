import "./Animal.css";

interface AnimalProps {
    icone?: string;
    nome?: string;
    peso?: number;
    emExtincao?: boolean;
}


export default function Animal({
    icone = "?",
    nome = "desconhecido",
    peso = 0.0,
    emExtincao = false,
}: AnimalProps) {
    return(
            <div className="animal">
            <div>{icone}</div>
            <div>{nome}</div>
            <div>{peso.toLocaleString()}kg</div>
            <div>Em Extinção: {emExtincao}</div>
        </div>
    );
}