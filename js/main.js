const prezzo1km = 0.21;

let submitDom = document.getElementById('submit');

submitDom.addEventListener('click',
    function() {

        let nameDom = document.getElementById('name').value;
        let kmDom = parseInt(document.getElementById('km').value);
        let etaDom = parseInt(document.getElementById('eta').value);

        let prezzoBiglietto = prezzo1km * kmDom;

        const sconto20 = ((20 / 100) * prezzoBiglietto);

        const sconto40 = ((40 / 100) * prezzoBiglietto);

        let prezzo20 = (prezzoBiglietto - sconto20);

        let prezzo40 = (prezzoBiglietto - sconto40);

        console.log('nome' + nameDom);
        console.log('eta' + etaDom);
        console.log('km' + kmDom);

        if (1) {
            prezzoBiglietto = prezzo20;
            alert('prezzo:' + prezzo20);
        } else if (3) {
            prezzoBiglietto = prezzo40;
            alert('prezzo:' + prezzo40);
        }
    }
);
