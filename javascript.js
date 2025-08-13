// sortier Funktion --v.1.0 by Viktor Gardt---------------------------------------------------------------------------------
function sortiereTabelle(x){ //  funktion zum sortieren von Strings x ist der übergabeparam für die jeweilige Spaltenreihe nach der Sortiert wird
//alert("funktion gestartet")


const tab=document.getElementById("co2table").tBodies[0] //
const rows = document.getElementById("co2table").tBodies[0].rows; // gibt die tr's  vom tbody zurück // tBodies[0] ist das erste tbody

let ccc = Array.from(rows) //  die tr's werden in ein array weil dadurch mehr funktionen wie sort verfügbar sind
 
//console.log(ccc.length) //länge des Arrays
ccc.sort(function(a, b) { // sort funktion sortiert a und b, dies wird im Rumpf verglichen, anschließend werden dann die tr's im Array sortiert vorgefunden
  let aa = a.cells[x].innerText; // String Inhalt wird aa zugewiesen
    let bb = b.cells[x].innerText; // String Inhalt wird bb zugewiesen
 
    return aa.localeCompare(bb);  // a Inhalt und b Inhalt werden verglichen und dann über return nach sort übergeben
    // localCompare() vergleicht Strings und gibt dann negative, 0 oder positive Zahl aus
 // dies wird für Sort zwingend benötigt damit, die sort Funktion richtig sortiert
})
  

for (let i = 0; i < ccc.length; i++) { // for schleife um durch das sortierte Array durchzugehen  
    tab.appendChild(ccc[i]);  //jedes tr element aus dem array wird nach hinten gesetzt, sodas nach dem durchlauf diese sortiert ist
}


console.log("Erfolgreich sortiert!") //feedback Konsole
}
//-------------------------------------------------------------------------------











//--v.1.0 by Viktor Gardt-------------------------------------------------------------------------------
function filter(){ // -- Filtermöglichkeit bei voller Eingabe -- CaseSensetive wird ignoiert.
  console.log("Event wird ausgelöst")
  let rows = document.getElementById("co2table").tBodies[0].rows // Alle Trs holen
let eingabe = document.getElementById("filterEingabe").value.toLowerCase(); // Eingabe des Inputlabels // wandelt Eingabe direkt in Kleinbuchstaben um

for(let x = 0; x<rows.length; x++){ // Schleife um durch alle TRs der Tabelle zu gehen
let cel= rows[x].cells // Inhalt der Spalten

for(let y=0; y<cel.length;y++){ // Schleife in Schleife um Inhalt der Spalten durchzugehen 

// Vergleich ob Inhalt der Eingabe === Inhalt des Inhalts ist
if(cel[y].innerText.toLowerCase()==eingabe){ // Vergleicht hier den Inhalt der Zellen mit dem Inhalt der Eingabe, transformiert in Kleinbuchstaben
  //alert("Inhalt wurde gefunden") // Eine Meldung wird rausgeworfen um weitere Eingabe zu unterbinden
  zellenunsichtbar() // Zuerst werden alle Zellen unsichtbar gesetzt
  rows[x].style.display = ""; // anschließend wird die Zelle wo der Inhalt gleich ist Sichtbar gemacht
  return // um zu verhindern das else trotzdem ausgeführt wird 
}else{
  console.log("Inhalt nicht gleich")
  zellensichtbar() // Zellen sollen sofern unsichtbar, sichtbar gemacht werden
}
}
}
//interne Funktion um Zellen unsichtbar zu machen
function zellenunsichtbar(){
  for(let x = 0; x<rows.length; x++){ // Schleife um durch alle TRs der Tabelle zu gehen
  rows[x].style.display = "none";
  }
}
// interne Funktion um Zellen wieder sichtbar zu machen
function zellensichtbar(){ 
  for(let x = 0; x<rows.length; x++){ // Schleife um durch alle TRs der Tabelle zu gehen
  rows[x].style.display = "";
  }
}
  //console.log(eingabe)
}
//-------------------------------------------------------------------------------