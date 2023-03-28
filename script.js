const api_key = "8482aabf21c6392007f3504e";
const url = "https://v6.exchangerate-api.com/v6/" + api_key ;

//elements
const currencyDatalist = document.getElementById('currencyDatalist');
const currencyDatalist2 = document.getElementById('currencyDatalist2');
const list_one = document.getElementById('list_one');
const list_two = document.getElementById('list_two');
const input_amount = document.getElementById('input_amount');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

fetch(url + "/codes")
  .then(res => res.json())
  .then(data => {
    const items = data.supported_codes;
    let options;
    for (let item of items){
      options += `<option value=${item[0]}>${item[1]}</option>`;
    }
    list_one.innerHTML = options;
    list_two.innerHTML = options;
  })

convert.addEventListener("click",function () {
  const firstExchange = currencyDatalist.value;
  const secondExchange = currencyDatalist2.value;
  const amount = input_amount.value;
  fetch(url + "/latest/"+ firstExchange)
    .then(res => res.json())
    .then(data => {
      const calculation = data.conversion_rates[secondExchange]*amount;
      result.innerHTML =
        ` <div class="result-card">
                 <div class="result-body">
                   ${amount} ${firstExchange} = ${calculation} ${secondExchange}
                 </div
           </div>
      `;
/*
      console.log(data.conversion_rates[secondExchange]*amount);
*/

    })
})
