const getExchangeRate = async (currencyCode) => {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    if (!response.ok) {
      throw new Error("Failed to fetch the exchange rates");
    }

    const data = await response.json();
    const exchangeRates = data.rates;
    const exchangeRate = exchangeRates[currencyCode];

    if (exchangeRate === undefined) {
      return null;
    }

    return Number(exchangeRate.toFixed(4));
  } catch (err) {
    throw new Error(
      `An error occurred while fetching exchange rates: ${err.message}`
    );
  }
};

getExchangeRate("ZMB")
  .then((rate) => {
    console.log(rate); // Output of currency exchange rates
  })
  .catch((error) => {
    console.error(error); // Output of error
  });
