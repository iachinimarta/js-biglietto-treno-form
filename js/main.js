const prezzo1km = 0.21;

let submitDom = document.getElementById('submit');

submitDom.addEventListener('click',
    function() {

        let nameDom = document.getElementById('name');
        let kmDom = parseInt(document.getElementById('km').value);
        let etaDom = parseInt(document.getElementById('eta').value);

        let prezzoBiglietto = prezzo1km * kmDom;

        let sconto20 = prezzoBiglietto / 100 * 20;

        let sconto40 = prezzoBiglietto / 100 * 40;

        if (etaDom = 1) {
            prezzoBiglietto -= (sconto20);
            alert(sconto20.toFixed(2));
        }

    }
);
