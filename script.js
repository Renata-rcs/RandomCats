const urlApi = 'https://api.thecatapi.com/v1/images/search';

// Função para obter uma imagem aleatória de gato
async function obterImagemAleatoriaGato() {
    try {
      
        const resposta = await fetch(urlApi);
      
        if (!resposta.ok) {
            throw new Error('A resposta da rede não foi bem-sucedida');
        }
        
        const dados = await resposta.json();
       
        const urlImagem = dados[0].url;
       
        document.getElementById('cat-image').src = urlImagem;
    
        document.getElementById('error-message').textContent = '';
    } catch (erro) {
        document.getElementById('error-message').textContent = 'Não foi possível obter uma imagem de gato. Tente novamente mais tarde.';
        console.error('Houve um problema com a operação fetch:', erro);
    }
}


obterImagemAleatoriaGato();
