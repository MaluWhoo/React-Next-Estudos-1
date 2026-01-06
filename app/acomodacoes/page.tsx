import { Acomodacao, Cabecalho, Conteudo, Menu, Rodape } from "@/components/interface"

export default function Page() {
    return (
        <div>

            <Cabecalho titulo="AirBnb" subtitulo="Minha acomodações"/>
            <hr />

            <Menu />

            <Conteudo>
                <h1>Página de Acomodações</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat facilis aperiam rerum iste error rem pariatur distinctio ut porro modi, tempora, sapiente cupiditate omnis, a deserunt quas provident iure.</p>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae enim quas quasi fuga? Necessitatibus blanditiis nostrum possimus, fugit architecto temporibus ex id! Sit, nostrum iste. Sapiente fugiat ut tenetur iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus minus earum impedit ipsam sint ullam quidem, eos ipsa soluta unde qui, aut consectetur blanditiis necessitatibus repellendus cum cumque quibusdam?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel deleniti repellat explicabo reprehenderit beatae dignissimos rerum magnam repudiandae minus ab! Quis numquam consectetur ratione nesciunt in aspernatur vel assumenda consequatur.</p>
            </Conteudo>
            <hr />
            <Rodape />
        </div>
    )
}