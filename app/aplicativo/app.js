function abrirCategoria(categoria) {
  const modal = document.getElementById("modal");
  const conteudo = document.getElementById("conteudoModal");

  let titulo = "";
  let texto = "";

  switch (categoria) {
    case "carne_moida":
      titulo = "🥩 30 Receitas com Carne Moída";
      texto = gerarLista(30, "Receita de Carne Moída");
      break;

    case "airfryer":
      titulo = "🍟 30 Receitas na Airfryer";
      texto = gerarLista(30, "Receita na Airfryer");
      break;

    case "arroz":
      titulo = "🍚 30 Receitas com Arroz";
      texto = gerarLista(30, "Receita com Arroz");
      break;

    case "frango":
      titulo = "🍗 30 Receitas com Frango e Ovo";
      texto = gerarLista(30, "Receita com Frango");
      break;

    case "lanches":
      titulo = "🥪 30 Lanches Salgados";
      texto = gerarLista(30, "Lanche Salgado");
      break;

    case "macarrao":
      titulo = "🍝 30 Receitas com Macarrão";
      texto = gerarLista(30, "Receita de Macarrão");
      break;

    case "sucos":
      titulo = "🥤 30 Sucos Naturais";
      texto = gerarLista(30, "Suco Natural");
      break;

    case "bolos":
      titulo = "🍰 30 Bolos Caseiros";
      texto = gerarLista(30, "Bolo Caseiro");
      break;

    case "fit":
      titulo = "🥗 30 Receitas Fit";
      texto = gerarLista(30, "Receita Fit");
      break;
  }

  conteudo.innerHTML = `
    <h2>${titulo}</h2>
    <div class="lista-receitas">${texto}</div>
  `;

  modal.style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function gerarLista(qtd, nome) {
  let html = "";
  for (let i = 1; i <= qtd; i++) {
    html += `<p><strong>${i}.</strong> ${nome} ${i}</p>`;
  }
  return html;
}
