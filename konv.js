async function getData() {
  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
getData()
let c = { usd: "41", uah: "1", eur: "49", pln:"11" };
let val = document.getElementById("val");
let result = document.getElementById("uah");
const valuta = document.getElementById("valuta")
function summ() {
  let z = 0;
  if (valuta.value == "USD"){
      if (val.value) {
        result.value = val.value * c.usd;
      }
  }else if (valuta.value == "EUR"){
     if (val.value) {
        result.value = val.value * c.eur;
      }
  }else if (valuta.value == "PLN"){
     if (val.value) {
        result.value = val.value * c.pln;
      }
  }
}
val.addEventListener("input", () => {
  if (val.value == "USD") {
    result.value = val.value * c.usd;
  }else if (valuta.value == "EUR"){
     if (val.value) {
        result.value = val.value * c.eur;
      }
  }else if (valuta.value == "PLN"){
     if (val.value) {
        result.value = val.value * c.pln;
      }
  }
});
valuta.addEventListener("input", () =>{
  val.value = 0
  result.value = 0 
})

// document.getElementById ("konvertor").textContent = parseInt(konvertation.replaceAll(' ', ''))/4
