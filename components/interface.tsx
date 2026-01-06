import Link from "next/link"

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
            <MenuItem texto="Início" url="/inicio"/>
            <MenuItem texto="Acomodações" url="/acomodacoes"/>
            <MenuItem texto="Contato" url="/contato"/>
        </div>
    )
}

export function MenuItem( props:any ) {
    return (
        <div>
            <Link href={props.url} className="p-2 hover:bg-amber-200 transition duration-300">
                {props.texto}
            </Link>
        </div>
    )
}

export function Cabecalho( props: any ) {
    return (
        <div className="bg-pink-100">
            <h1>Logo</h1>
            <p>{props.titulo}</p>
            <p>{props.subtitulo}</p>
            <p>{props.preco}</p>
        </div>
    )
}

export function Conteudo( props: any ) {

    // console.log(props.titulo) - vai mostrar o titulo passado como prop 
    console.log(props)

    return (
        <div className="bg-gray-200">
            {/* {props.titulo} */}
            {/* <p>Conteudo</p> */}

            {/* O props.children vai fazer com que o conteúdo passado como filho do componente Conteudo seja renderizado aqui */}
            {props.children}
        </div>
    )
}

export function Rodape() {

    return (
        <div className="bg-gray-500">
            {/* <p>Rodape</p> */}
            <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#d1fae5', textAlign: 'center', padding: '10px 0' }}>
                <p>Rodape</p>
            </footer>
        </div>
    )
}

