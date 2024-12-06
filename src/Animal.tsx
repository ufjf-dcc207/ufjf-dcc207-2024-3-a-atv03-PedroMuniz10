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
            <div className="icone">{icone}</div>
            <div className="nome">{nome}</div>
            <div className="peso">{peso.toLocaleString()}kg</div>
            <div className="extincao">Em Extinção: {emExtincao}</div>
        </div>
    );
}