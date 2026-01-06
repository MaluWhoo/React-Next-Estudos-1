import Image from "next/image"

export default function Page() {

    // Objeto Usuario
    const usuario = {
        nome: "Anna",
        urlPerfil: "https://tse4.mm.bing.net/th/id/OIP.FFgCCEhtmu9h1jQb6yj4mgHaHB?rs=1&pid=ImgDetMain&o=7&rm=3"
    }

    return (
        <div>
            <h1>Imagens</h1>
            <Image src="/img/OIP.webp" alt="Texto Image" width={90} height={90}/>
            {/* <img src={usuario.urlPerfil} alt={"Nome: " + usuario.nome} style={ { width:90, height:90 } }/>  */}
        </div>
    )
}