$(function (){

    const token = $('meta[name="csrf-token"]').attr("content");


    const osztalyokTomb = [
        "Válassz osztályt!",
        "szfa1",
        "szfa2",
        "szfb1",
        "szfb2",
    ]

    osztalyokTomb.forEach((element, index) =>{
        $("#osztaly").append("<option value="+index+">"+element+"</option>")

        $("#osztalyokKiir").append("<option value="+index+">"+element+"</option>")
    });


    const ajaxhivas = new Ajax(token);
    ajaxhivas.selectAjax("/tevekenysegVisszaad", megjelenit);

    
    function megjelenit(adat){
        $("#tevekenyseg").append("<option value=valasztas>Válassz tevékenységet!</option>")
        adat.forEach((element) =>{
           $("#tevekenysegek").append("<option value="+element.tevekenyseg_id+">"+element.tevekenyseg_nev+"</option>")
        });
    }


    $("#kuld").on("click", () =>{
        const adat = {
            osztalyId: $("#osztaly").val(),
            tevekenysegId: $("#tevekenysegek").val()
        }
        ajaxhivas.insertAjax("/ujBejegyzes", adat);

    });

    $("#lekerdez").on("click", () =>{
        let id = $("#osztalyokKiir").val();
        ajaxhivas.selectAjax("/bejegyzesVisszaad/"+id, tablaMegjelenit);
    });
    ajaxhivas.selectAjax("/bejegyzesVisszaad", tablaMegjelenit);
    //ajaxhivas.selectAjax("/bejegyzesVisszaad/4", tablaMegjelenit);
    function tablaMegjelenit(adat){
        let kiir = "";
        kiir += "<tr>";
        kiir += "<th>Osztály</th>";
        kiir += "<th>Tevékenység</th>";
        kiir += "<th>Pont</th>";
        kiir += "<th>Státusz</th>";
        kiir += "</tr>";

        adat.forEach((element) =>{
            console.log(element);
            kiir += "<tr>";
            kiir += "<td>"+element.osztalyok_id+"</td>";
            kiir += "<td>"+element.tevekenyseg.tevekenyseg_nev+"</td>";
            kiir += "<td>"+element.tevekenyseg.pontszam+"</td>";
            kiir += "<td>"+element.allapot+"</td>";
            kiir += "</tr>";
        })
        $(".tablazat").html(kiir)
    }
})

