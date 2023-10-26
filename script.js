const textareaD = document.getElementById("auto-save");

function AutoSave(){
    localStorage.setItem("Data",textareaD.value);
}

if(localStorage.getItem("Data")){
    textareaD.value = (localStorage.getItem("Data"));
}
textareaD.addEventListener("input",AutoSave);

//Change Theme::
function changeThemeColor() {
    const SelectTheme = document.getElementById('changeTheme');

    switch (SelectTheme.value) {
        case 'Purple-shade':
            document.body.style.backgroundColor = '#C38D9E'
            break;
        case 'Green-Shade':
            document.body.style.backgroundColor = '#41B3A3'
            break;
        default:
            document.body.style.backgroundColor = 'white'
            break;
    }
}
