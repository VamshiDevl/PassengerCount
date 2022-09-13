let count = 0;
function increment(){
    count += 1;
    document.getElementById("count-el").innerHTML = count;
}

function save(){
    let dash = count+" - ";
    document.getElementById("save-el").textContent += dash;
    count = 0;
    document.getElementById("count-el").innerHTML = count;
}

function reset(){
    location.reload();
}