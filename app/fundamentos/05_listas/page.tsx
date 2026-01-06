export default function Page() {

    const usuarios = [
        {id: 1, nome: "Anna", email: "anna@email.com"},
        {id: 2, nome: "Maria", email: "maria@email.com"},
        {id: 3, nome: "João", email: "joao@email.com"},
        {id: 4, nome: "José", email: "jose@email.com"},
        {id: 5, nome: "Pedro", email: "pedro@email.com"},
        {id: 6, nome: "Paulo", email: "paulo@email.com"},
    ]

    // O map percorre todos os itens da lista e retorna uma nova lista
    const lista = usuarios.map ( usuario =>  
        // A chave key é obrigatória para listas no React. Ela ajuda o React a identificar quais itens foram alterados, adicionados ou removidos. E também tem controle de performance fazendo a otimizações necessárias.
        <li key={usuario.id}>
            { usuario.nome } ( { usuario.email } )
        </li>
    )

    return (
        <div>
            {/* <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul> */}

            <ul>
                { lista }
            </ul>
        </div>
    )
}