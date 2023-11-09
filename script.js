function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function openForm1(){
    if(document.f1.from.value != "" && document.getElementById("d1").value != "" && document.f1.to.value != ""){
        document.getElementById("myForm1").style.display = "block";
        document.getElementById("p1").innerHTML = document.f1.from.value + " -> " + document.f1.to.value + " | " + document.getElementById("d1").value + " | For Quota | " + document.f1.Quota.value;
    }
}
function booking(){
    document.getElementById("myForm2").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
}
function closeForm2() {
    document.getElementById("myForm1").style.display = "none";
}
function al(){
    alert("Specially abled availing the concession need to carry Photo Identity card issued by Railways which is to be produced for On-board / off-board verification during journey. Escort passengers also need to carry photo identity card mentioned at the time of booking.")
}
