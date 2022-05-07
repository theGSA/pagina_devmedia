function showSearchInput(element){

    var input = document.getElementById('search-input');

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

function Init()
{
    ShowAba('flight')
}

function ShowAba(strAba)
{
    const arrayAbas = ['hotel', 'rental', 'flight'];
    for(var str_aba of arrayAbas)
    {
        var Aba = document.getElementById(`aba-${str_aba}`);
        var btnAba = document.getElementById(`btn-${str_aba}`);
        if(Aba){
            Aba.style.display = (strAba == str_aba) ? "":"none";
            btnAba.style.backgroundColor = (strAba == str_aba) ? "orangered":"black";
        }
    }
}