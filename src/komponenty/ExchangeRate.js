const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
        <div className="exchange-rate">
            <h3>Aktualny kurs</h3>
            <h1>{exchangeRate}</h1>
            <p>{chosenPrimaryCurrency} do {chosenSecondaryCurrency}</p>
        </div>
    )
  }
  
  export default ExchangeRate;