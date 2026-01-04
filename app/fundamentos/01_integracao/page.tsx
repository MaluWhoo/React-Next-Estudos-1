export default function Page(){

    const regra = <h1>Maior de idade</h1>
    const nome = "João"

    const lista = [
        <h1>Anna</h1>,
        <h1>João</h1>,
        <h1>Maria</h1>
    ]

    let salario = 1000
    let bonus = 200

    // Objeto
    const usuario = {
        nome: "Anna",
        idade: "25",
        cidade: "São Paulo"
    }

    function MeuBotao(){
        return (
            <button>Clique</button>
        )
    }

    return (
        <div className={nome}>
            Olá, {lista[2]}
            O salário é: {salario + bonus}
            O usuario mora: {usuario.cidade}, e tem {usuario.idade} anos.
            {MeuBotao()}
        </div>
    )
}