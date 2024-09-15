let resultados = "";
    let titulo = "";
    let descricao = "";


function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value 
    console.log(campoPesquisa);

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado for encontrado.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class= "item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">+ Mais informações</a>    
            </div>
            `;
        }
        if (!resultados) {
            resultados = "<p>Nenhum resultado foi encontrado.</p>"
        } 
    }
    
    section.innerHTML = resultados;
}
