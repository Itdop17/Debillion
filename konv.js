let c = { usd: "41", uah: "1" };
let val = document.getElementById("val");
let result = document.getElementById("uah");
function summ() {
  let z = 0;
  if (valuta == "usd"){
      if (val.value) {
        result.value = val.value * c.usd;
      }
  }else if () {
    
  }
}
val.addEventListener("input", () => {
  if (val.value) {
    result.value = val.value * c.usd;
  }
});
// document.getElementById ("konvertor").textContent = parseInt(konvertation.replaceAll(' ', ''))/4
