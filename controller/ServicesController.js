class ServicesController{
    constructor(){}
    index(req, res){
        res.status(200).json({ serverResponse: "hola mundo"});
    }
    test(req,res){
        const data = request.body;
        request.body["msn"] = "Por el servidor";
        response.status(200).json(data);
    }
    divisas(req, res){
        var div = {
            CAD: 1.2615498641,
            HKD: 7.7536852508,
            ISK: 127.8102610558,
            PHP: 48.6049575887,
            DKK: 6.1241867743,
            HUF: 295.758873425,
            CZK: 21.3341019517,
            GBP: 0.7107634028,
            RON: 4.0154821708,
            SEK: 8.2967141563,
            IDR: 14106.4975706168,
            INR: 72.5170880343,
            BRL: 5.440335996,
            RUB: 74.0524582064,
            HRK: 6.2398089434,
            JPY: 105.3940541876,
            THB: 30.0197644734,
            CHF: 0.9014246891,
            EUR: 0.8235197233,
            MYR: 4.0434818414,
            BGN: 1.6106398748,
            TRY: 7.0559993412,
            CNY: 6.4651239397,
            NOK: 8.4979000247,
            NZD: 1.3658074611,
            ZAR: 14.7079799061,
            USD: 1,
            MXN: 20.7206621099,
            SGD: 1.3215844519,
            AUD: 1.2664086305,
            ILS: 3.2656674627,
            KRW: 1113.1680803755,
            PLN: 3.711273985,
            BO: 6.96

        }
        const data = request.body;
        let value = data["valor"];
        let de = div[data["DO"]];
        let destino = div[data["DC"]];
        let c = (value/de) / destino;
        response.status(200).json("El cambio es de: "+ c );
    }

    interes(req, res){
        const data = request.body;
        let monto = data["monto"];
        let interes = data["interes"];
        let tiempo = data["tiempo"];
        let pago = monto*(interes/100)*tiempo;
        response.status(200).json("Pago: "+pago);
      }
}
export default ServicesController;