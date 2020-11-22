/*function myFunction() {
    let searchForm = document.getElementById("prova");
    if (searchForm.style.display === "block") {
        searchForm.style.display = "none";
    } else {
        searchForm.style.display = "block";
    }
}*/


function disableYear(){
    let nodes = document.getElementById("fyear").getElementsByTagName('*');
    for(let i = 0; i < nodes.length; i++){
        if(nodes[i].disabled){
            nodes[i].disabled = false;
        }else {
            nodes[i].disabled = true;
        }
    }
    if(slider.$element[0].disabled){
        slider.disable();
    }
    else{
        slider.enable();
    }
    document.getElementById("customSwitches").disabled = false;

}

function showExcludeGenre() {
    let excludegenre = document.getElementById("excludegenrediv");
    if(excludegenre.style.display === "none"){
        excludegenre.style.display = "block";
    }else{
        excludegenre.style.display = "none";
    }
}

function showYear(){
    document.getElementById("yearsdiv").style.display = "block";
    document.getElementById("rangeyearsdiv").style.display = "none";
    document.getElementById("singleyearlabel").style.fontWeight= "400";
    //document.getElementById("singleyearlabel").style.color="blue";

    document.getElementById("rangeyearlabel").style.fontWeight= "300";


}

function showRangeYears(){
    document.getElementById("yearsdiv").style.display = "none";
    document.getElementById("rangeyearsdiv").style.display = "block";
    document.getElementById("singleyearlabel").style.fontWeight= "300";
    document.getElementById("rangeyearlabel").style.fontWeight= "400";

}


//DAFARE cancellare valori quando deseleziona una opzione??
function showExcludeYear(){
    let excludeyear = document.getElementById("yearstoexclude");
    if(excludeyear.style.display === "none"){
        excludeyear.style.display = "block";
    }else{
        excludeyear.style.display = "none";
    }
}


$("#selectgenre").select2({
    placeholder:"Select Genre",
    orientation: "bottom"
});

$("#excludegenre").select2({
    placeholder:"Select Genre to exclude",
    orientation: "bottom"
});






