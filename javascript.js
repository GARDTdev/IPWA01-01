// Definieren der Spalten
  const a1 = document.getElementById("a1")
  const a2 = document.getElementById("a2")
  const a3 = document.getElementById("a3")
  const b1 = document.getElementById("b1")
  const b2 = document.getElementById("b2")
  const b3 = document.getElementById("b3")
  const c1 = document.getElementById("c1")
  const c2 = document.getElementById("c2")
  const c3 = document.getElementById("c3")
  const d1 = document.getElementById("d1")
  const d2 = document.getElementById("d2")
  const d3 = document.getElementById("d3")



  const fileInput = document.getElementById("fileInput");
  const button = document.getElementById("test1");
  let selectedFile = null;


  fileInput.addEventListener("change",function (event)  {
    selectedFile = event.target.files[0];
  })

 
  button.addEventListener("click",function (){
    if (!selectedFile) {
      alert("Bitte zuerst eine Datei auswählen!");
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const text1 = e.target.result;

  
     
      try {
        const json = JSON.parse(text1);
       // console.log(json);
       // console.log(json.a1,json.a2,json.a3)


a1.innerText=json.a1
a2.innerText=json.a2
a3.innerText=json.a3
b1.innerText=json.b1
b2.innerText=json.b2
b3.innerText=json.b3
c1.innerText=json.c1
c2.innerText=json.c2
c3.innerText=json.c3
d1.innerText=json.d1
d2.innerText=json.d2
d3.innerText=json.d3

      } catch {
        
      }
    };

    reader.readAsText(selectedFile);

   
  });




function sortiereTabelle(spaltenIndex){

  // 1. Tabelle und tbody holen
  var tabelle = document.getElementById("co2table");
  var tbody = tabelle.tBodies[0];

  // 2. Alle Zeilen in ein Array packen
  var zeilen = Array.from(tbody.rows);

  // 3. Sortieren (nur DESC)
  zeilen.sort(function(b, a) {
    var wertA = a.cells[spaltenIndex].innerText;
    var wertB = b.cells[spaltenIndex].innerText;

    // Falls Zahlen, als Zahlen vergleichen
    if (!isNaN(wertB) && !isNaN(wertA)) {
      return Number(wertA) - Number(wertB); // ASC
    }

    // Sonst als Text vergleichen (DESC)
    return wertB.localeCompare(wertA, "de");
  });

  // 4. Sortierte Zeilen wieder ins tbody einfügen
  for (var i = 0; i < zeilen.length; i++) {
    tbody.appendChild(zeilen[i]);
  }
}




function filterTabelle() {
  // Eingabe holen und in Kleinbuchstaben umwandeln
  var filterText = document.getElementById("filterEingabe").value.toLowerCase();
  
  // Tabelle und Zeilen holen
  var tabelle = document.getElementById("co2table");
  var zeilen = tabelle.tBodies[0].rows;
  
  // Jede Zeile prüfen
  for (var i = 0; i < zeilen.length; i++) {
    var zeile = zeilen[i];
    var textDerZeile = zeile.innerText.toLowerCase();
    
    // Falls Filtertext enthalten → anzeigen, sonst ausblenden
    if (textDerZeile.indexOf(filterText) > -1) {
      zeile.style.display = "";
    } else {
      zeile.style.display = "none";
    }
  }
}