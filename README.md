# FortyTwo.js
Minha biblioteca JavaScript.

## Funções uteis.

### Print()
A função <code>print()</code> vai imprimir elementos no terminal igual o <code>console.log()</code>

### Error()
Se estiver criando determinada função e alguma das condições não for atingida e queira informar que houve um erro através do terminal, use a função <code>error()</code>.


## Funções básicas de manipulação do DOM.

### selectElement()

Para selecionar elementos utilize a função <code>selectElement('identificador + elemento')</code>. Se o elemento a ser selecionado for um ID use o identificador "#", caso seja uma Classe use ".". 

Ex.: <code>let botao = selectElement('#botao')</code>

### addClass() e removeClass()

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

## HTML reutilizavél

As funções JS que deixam <strong>menu de navegação</strong> do HTML responsivos já estão incluidos.

<code>

    <nav id="navbar">
            <a href="#"><img src="#" alt="Sua Logo" id="logo"></a>
            <div class="mobile-menu-icon">
                <button id="button-open-menu">
                    <img src="../images/open-menu-icon.svg" alt="Abrir Menu" class="image-open-menu">
                </button>
            </div>
            <div class="mobile-menu-icon">
                <button id="button-close-menu" class="off">
                    <img src="../images/close-menu-icon.svg" alt="Fechar Menu" class="image-close-menu">
                </button>
            </div>
            <ul class="navlist off">
                <li class="component-navlist">
                    <a href="#" class="link-component-navlist" tabindex="1" data-label="Link 1">Link 1</a>
                </li>
                 <li class="component-navlist">
                    <a href="#" class="link-component-navlist" tabindex="2" data-label="Link 2">Link 2</a>
                </li>
                <li class="component-navlist">
                    <a href="#" class="link-component-navlist" tabindex="3" data-label="Link 3">Link 3</a>
                </li>
            </ul>
    </nav>

</code>
