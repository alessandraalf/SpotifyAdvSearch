function searchS(){
    let searchString="";

    let keywordSB = document.getElementById("keyword");
    if(keywordSB.value!==""){
        searchString += '"' + keywordSB.value + '"';
    }

    let excludegenre = document.getElementsByName("excludegenre")[0].checked;
    let searchYear = document.getElementsByClassName("customradio")[0].disabled;

    // GENRES

    // selectedgenres
    if(searchString!==""){
            searchString += " AND ";
        }
    for (let i = 0; i < $("#selectgenre").select2('data').length; i++) {
        console.log($("#selectgenre").select2('data')[i].id);
        searchString += 'genre:"' + $("#selectgenre").select2('data')[i].id + '"';
        if(i!==$("#selectgenre").select2('data').length - 1){
            searchString += " AND ";
        }
    }


    if(excludegenre){
        console.log("Escludi genere attivo");
        // selectedgenres
        for (let i = 0; i < $("#excludegenre").select2('data').length; i++) {
            console.log($("#excludegenre").select2('data')[i].id);
            searchString += ' NOT genre:"' + $("#excludegenre").select2('data')[i].id +'"';
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
            searchString += " AND year:"+year;
        } else {
            console.log("cerca range");
            let range = document.getElementById("yearslider").value;
            let rangeArr = range.split(',');
            searchString += " AND year:"+rangeArr[0]+"-"+rangeArr[1];
            console.log(range);

            let excludeyear = document.getElementsByName("excludeyear")[0].checked;
            if(excludeyear){
                console.log("escludi anno attivo");
                let yeartoexclude = document.getElementById("yearstoexclude").value;
                searchString += " NOT year:"+yeartoexclude;
            }
        }
    }


    console.log(searchString);
    window.open("spotify:app/search/"+searchString);
}