// O export faz com que eu utilize esse em qualquer arquivo
// export function Acomodacao() {
//     // return <span>IMAGEM ACOMODAÇÃO</span>
//     return (
//         // <span>IMAGEM ACOMODAÇÃO</span>
//         // <h1>São Roque, Brasil</h1>

//         // Aqui ele estara retornando apenas UMA componente principai, nesse caso a DIV e dentro dela tem os outros componentes que eu quero

//         // Tbm pode usar a tag vazia
//         // <> </>        

//         <div>
//             <span>IMAGEM ACOMODAÇÃO</span>
//             <h1>São Roque, Brasil</h1>
//             <p>Desc. Perto da vinícola Góes</p>            
//         </div>
//     )
// }

import { Acomodacao, Cabecalho, Conteudo, Menu, Rodape } from "@/components/interface"

export default function Page() {
    return (
        <div>
            <Cabecalho titulo="AirBnb" subtitulo="Início" className="bg-pink-100"/>

            <Menu />

            {/* <Conteudo titulo="Página início" subtitulo="Conteúdo da página inicial" /> */}
            <Conteudo>
                <h1>Página Início</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat facilis aperiam rerum iste error rem pariatur distinctio ut porro modi, tempora, sapiente cupiditate omnis, a deserunt quas provident iure.</p>
            </Conteudo>
            <hr />
            <Rodape />
        </div>
    )
}