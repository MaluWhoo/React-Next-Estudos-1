import { Acomodacao, Cabecalho, Menu } from "@/components/interface";

export default function Page() {
    return (
        <div>
            {/* Usando o modelo de tag. Tag com auto fechamento */}
            <Cabecalho />
            <Menu />
            <hr />
            <Acomodacao />
        </div>
    )
}