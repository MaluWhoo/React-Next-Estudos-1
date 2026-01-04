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

import { Acomodacao, Cabecalho, Menu } from "@/components/interface"

export default function Page() {
    return (
        <div>
            {Cabecalho()}
            <hr />
            {Acomodacao()}
            <hr />
        </div>
    )
}