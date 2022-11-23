document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#currency-converter").addEventListener("submit",(event)=>{
        event.preventDefault();

        const {target:{from, to, amount}} = event;

        let headers = new Headers();
        headers.append("apikey","YFsMiMLODqQlhsTSAaRIrYSdusufryk0");

        const requestOptions = {
            method:"GET",
            headers,
        }

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                let {result} = data;
                document.querySelector(".result").textContent=`As per the Exchange Rate is ${result}`
            })
    })
})