function searchS(){
    let searchString="";

    let keywordSB = document.getElementById("keyword");
    if(keywordSB.value!==""){
        searchString += '%22' + keywordSB.value + '%22';
    }

    let excludegenre = document.getElementsByName("excludegenre")[0].checked;
    let searchYear = document.getElementsByClassName("customradio")[0].disabled;

    // GENRES

    // selectedgenres
    if(searchString!=="" && ($("#selectgenre").select2('data').length > 0 || !searchYear)){
            searchString += "%20AND%20";
        }
    for (let i = 0; i < $("#selectgenre").select2('data').length; i++) {
        console.log($("#selectgenre").select2('data')[i].id);
        searchString += 'genre%3A%22' + $("#selectgenre").select2('data')[i].id + '%22';
        if(i!==$("#selectgenre").select2('data').length - 1){
            searchString += "%20AND%20";
        }
    }


    if(excludegenre){
        console.log("Escludi genere attivo");
        // selectedgenres
        for (let i = 0; i < $("#excludegenre").select2('data').length; i++) {
            console.log($("#excludegenre").select2('data')[i].id);
            searchString += '%20NOT%20genre%3A%22' + $("#excludegenre").select2('data')[i].id +'%22';
        }
    }


    // YEARS
    if(!searchYear){
        console.log("search year attivo");
        let searchByYear = document.getElementById("radio4").checked;
        if(searchByYear){
            console.log("cerca anno");
            let year = document.getElementById("singleyears").value;
            console.log(year);
            searchString += "%20AND%20year%3A"+year;
        } else {
            console.log("cerca range");
            let range = document.getElementById("yearslider").value;
            let rangeArr = range.split(',');
            searchString += "%20AND%20year%3A"+rangeArr[0]+"-"+rangeArr[1];
            console.log(range);

            let excludeyear = document.getElementsByName("excludeyear")[0].checked;
            if(excludeyear){
                console.log("escludi anno attivo");
                let yeartoexclude = document.getElementById("yearstoexclude").value;
                searchString += "%20NOT%20year%3A"+yeartoexclude;
            }
        }
    }


    console.log(searchString);
    window.open("spotify://search/"+searchString);
}