function showSearchInput(element){

    var input = document.getElementById('search-input');
    var display = window.getComputedStyle(input, null).display;

    if(input){
        element.disabled = true;

        input.classList.remove("input-search");
        input.classList.add('show-input-search');
        
        input.focus();
    }
}

function mfunc(){
    var input = document.getElementById('search-input');
    var btn = document.getElementById('btn-search');

    if(input){
        console.log("rateivou");
        input.classList.add("input-search");
        input.classList.remove('show-input-search');
        
        if(btn)
            btn.disabled = false;
    }
}