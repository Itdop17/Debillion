<<<<<<< Updated upstream
const select = document.querySelector(".selector")
async function getData() {
  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    let i;
    json.forEach(element => {
   const delaim = document.createElement("option")
   delaim.value = element.rate
   delaim.textContent = element.rate
   select.appendChild(delaim)
      console.log(element.rate)
    });
    console.log(json);
  } catch (error) {
    console.error(error.message);
=======
let rates = {};

async function getRates() {
  const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";
  try {
    const res = await fetch(url);
    const data = await res.json();

    data.forEach(item => {
      if (["USD", "EUR", "PLN"].includes(item.cc)) {
        rates[item.cc] = item.rate;
      }
    });

    rates["UAH"] = 1;
    convert();
  } catch (err) {
    document.getElementById("rate-info").textContent = "Не удалось загрузить курс 😞";
    console.error(err);
>>>>>>> Stashed changes
  }
}

// Элементы
const fromAmount = document.getElementById("from-amount");
const toAmount = document.getElementById("to-amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const switchBtn = document.getElementById("switch-btn");
const rateInfo = document.getElementById("rate-info");

// Конвертация
function convert() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(fromAmount.value);

  if (!amount || !rates[from] || !rates[to]) return;

  const result = amount * (rates[from] / rates[to]);
  toAmount.value = result.toFixed(2);
  rateInfo.textContent = `1 ${from} = ${(rates[from] / rates[to]).toFixed(4)} ${to}`;
}

// Обработчики
fromAmount.addEventListener("input", convert);
fromCurrency.addEventListener("change", convert);
toCurrency.addEventListener("change", convert);

switchBtn.addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  convert();
});

// Старт
getRates();
