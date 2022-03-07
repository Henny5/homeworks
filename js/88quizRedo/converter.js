(async function () {
  "use strict";

  async function loadCountries() {
    try {
      const r = await fetch("countries.json");

      if (!r.ok) {
        throw new Error(`${r.status} ${r.statusText}`);
      }
      return await r.json();
    } catch (e) {
      console.error(e);
    }
  }

  class Country {
    constructor(name, currencyId) {
      this.name = name;
      this.currencyId = currencyId;
    }
  }

  async function createCountries() {
    const data = await loadCountries();
    const populateCountries = (country) => {
      $(`
        <option value=${country.currencyId} > Country:${country.name}-Currency:${country.currencyId}</option>
        `).appendTo("#from");

      $(`
        <option value=${country.currencyId}> Country:${country.name}-Currency:${country.currencyId}</option>
        `).appendTo("#to");
    };
    Object.keys(data.results).forEach((countryCode) => {
      //console.log(countryCode);
      //console.log(data.results[countryCode]);
      //key is the equivulant if index in an array
      const C = new Country(
        data.results[countryCode].name,
        data.results[countryCode].currencyId
      );

      //console.log(C);

      populateCountries(C);
    });
  }

  function convertCurrency() {
    const from = $("#from").val();
    const to = $("#to").val();
    console.log(from);
    console.log(to);
    const url = `https://free.currconv.com/api/v7/convert?q=${from}_${to},${to}_${from}&compact=ultra&apiKey=d5ffba7aa6710a8c5027`;
    console.log(url);
    fetch(
      `	https://free.currconv.com/api/v7/convert?q=${from}_${to},${to}_${from}&compact=ultra&apiKey=d5ffba7aa6710a8c5027`
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        const currency = `${from}_${to}`;
        console.log(currency);
        const vv = `${to}_${from}`;
        const result = data[currency];
        const resultVv = data[vv];
        //${JSON.stringify(data)}= will turn data into a string
        //console.log(`value for ${currency} is ${result}`);
        $(`<p>${currency}: ${result}</p>`).appendTo("#result");
        $(`<p>${vv}: ${resultVv}</p>`).appendTo("#result");
        console.log(data);
      });
  }

  $("#convert").click(convertCurrency);
  createCountries();
})();
