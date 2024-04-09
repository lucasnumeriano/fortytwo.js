# FortyTwo.js
Minha biblioteca JavaScript.

Para imprimir elementos no console use a função <code>print()</code>. 

Ex.: <code>print("Hello World!")</code>

Casa queira informar que algo deu erro através do console, basta usar a função <code>error()</code>.

Para selecionar elementos utilize a função <code>selectElement('identificador + elemento')</code>. Se o elemento a ser selecionado for um ID use o identificador "#", caso seja uma Classe use ".". 

Ex.: <code>let botao = selectElement('#botao')</code>

Para adicionar classes a um elemento use a função <code>addClass('identificador + elemento', 'classe')</code>. Caso o elemento já possua tal classe ou não for encontrado será informado no terminal.  

Para remover classses basta usar a função <code>removeClass('identificador + elemento', 'classe')</code>.

Ex.: 
<code>
    const botao = selectElement('#botao')

    botao.addEventListener('click', () => {
        if (botao.classList.contains('azul')) {
            removeClass('#botao', 'azul')
        } else {
            addClass('#botao', 'azul')
        }
    })
</code>