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
            {peso > 0 ? (
                <div className="peso">{peso.toLocaleString()}kg</div>
            )   :   (
                <div className="peso">Peso não disponível</div>
            )}
            {emExtincao && <div className="extincao">Em extinção!</div>}
        </div>
    );
}