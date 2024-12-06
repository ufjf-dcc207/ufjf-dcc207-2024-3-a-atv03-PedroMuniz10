import { ReactNode } from "react";
import "./Exibicao.css";

interface ExibicaoProps {
    inicio: Date;
    fim: Date;
    local: string;
    children?: ReactNode;
}

export default function Exibicao({
    inicio,
    fim,
    local,
    children,
}: ExibicaoProps)   {
    return (
        <div className="exibicao">
            <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
            <div className="fim">Encerramento: {fim.toLocaleString()}</div>
            <div className="cercado">Local: {local.toLocaleString()}</div>
            <div className="animais">{children}</div>
        </div>
    );
}