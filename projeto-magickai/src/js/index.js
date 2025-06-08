//fução filtrar

const botaoFiltrar =document.querySelector('.btn-filtrar')

botaoFiltrar.addEventListener('click', function(){
    const categoriaSelecionada = document.querySelector('#categoria').value;

    const precoMaximoSelecionado = document.querySelector('#preco').value;

    const cartas = document.querySelectorAll('.carta')

    cartas.forEach(function(carta) {

        const categoriaCarta = carta.dataset.categoria;

        const precoCarta = carta.dataset.preco;
        let mostrarCarta = true;

        const temFiltroDeCategoria = categoriaSelecionada !== '';
        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();
        const temFiltroDePreco = precoMaximoSelecionado !== '';

        const cartaNaoBateComFiltroDePrecoMaximo = (temFiltroDePreco && parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado));
        if (cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if (cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        if (mostrarCarta){
            carta.classList.add('mostrar');
        }else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});