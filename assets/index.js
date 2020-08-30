function burgerNav(scope){
    scope.classList.toggle('burgerOpenToggle');
    document.getElementsByClassName('burgerNavHeader')[0].classList.toggle('burgerOpenToggle');
}

function panelNav(url){
    window.open(url);
}