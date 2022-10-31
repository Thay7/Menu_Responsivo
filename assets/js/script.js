function menuShow () {
    let menuMobile = document.querySelector('.mobile-menu'); //pegando o elemento pela classe

    //se na ação do clique, o menu mobile já tiver a classe open (ou seja, se já tiver aberto) ele vai remover a classe open para fechar o menu mobile
    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove('open');

        //pegando o elemento icon lá do index e mudando o atributo src (imagem)
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg" 

    } else { //caso contrario, o menu mobile irá adicionar a classe open
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"
    }
}