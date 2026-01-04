export function Acomodacao() {
    return (
        <div>
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>São Roque, Brasil</h1>
            <p>Desc. Perto da vinícola Góes</p>            
        </div>
    )
}

export function Botao() {
    return (
        <button>Botão Padrão</button>
    )
}

export function Menu() {
    return (
        <div className="bg-amber-400">
            Acomodações | Experiências
        </div>
    )
}

export function Cabecalho() {
    return (
        <div className="bg-pink-100">
            <h1>Logo</h1>
            {Menu()}
            {/* <p>Acomodações | Experiências</p> */}
        </div>
    )
}

