import { Acomodacao, Cabecalho, Menu } from "@/components/interface";

export default function Page() {
    return (
        <div>
            {/* Usando o modelo de tag. Tag com auto fechamento */}
            <Cabecalho 
            titulo="São Roque, Brasil"
            subtitulo="Desc. Perto da vinícola Góes" 
            preco="R$ 250,00"
            />
            <Menu />
            <hr />
            <Acomodacao />

            <Cabecalho 
            titulo="Campos do Jordão, Brasil"
            subtitulo="Desc. Perto da montanha" 
            preco="R$ 300,00"
            />            <Cabecalho />
        </div>
    )
}