// const prezzo1km = 0.21;

// let submitDom = document.getElementById('submit');

// submitDom.addEventListener('click',
//     function() {

//         let nameDom = document.getElementById('name');
//         let kmDom = parseInt(document.getElementById('km').value);
//         let etaDom = parseInt(document.getElementById('eta').value);

//         let prezzoBiglietto = prezzo1km * kmDom;

//         let sconto20 = prezzoBiglietto / 100 * 20;

//         let sconto40 = prezzoBiglietto / 100 * 40;

//         if (etaDom = 1) {
//             prezzoBiglietto -= (sconto20);
//             alert(sconto20.toFixed(2));
//         }

//     }
// );

let submitDom = document.getElementById('submit');

submitDom.addEventListener('click',
    function() {

        const prezzo1km = 0.21;

        let nameDom = document.getElementById('name').value;
        console.log(nameDom);

        let kmDom = parseInt(document.getElementById('km').value);
        console.log(kmDom);

        let ageDom = document.getElementById('age').value;
        console.log(ageDom);



        let prezzoBiglietto = prezzo1km * kmDom;

        let promo = "Biglietto Standard"; //A cose normali si stampa questo nella sezione promo

        if (ageDom == 'junior') {
            prezzoBiglietto -= (prezzoBiglietto / 100 * 20);
            promo = "Sconto minorenni" //Se junior stampa questo
        } else if (ageDom == 'senior') {
            prezzoBiglietto -= (prezzoBiglietto / 100 * 40);
            promo = "Sconto senior" //Se senior stampa questo
        }

        // Calcolo i numeri random di carrozza e prenotazione
        const carriageNumber = Math.floor(Math.random()) + 1;
        const prenotationNumber = Math.floor(Math.random() * (10000 - 90000)) + 90000;

        // Inserisco i dati da stampare poi nel box del biglietto:
        document.getElementById('passenger-name').innerHTML = nameDom;

        document.getElementById('promo').innerHTML = promo;

        document.getElementById('ticket-price').innerHTML = prezzoBiglietto.toFixed(2) + "€";

        document.getElementById('carriage').innerHTML = carriageNumber;

        document.getElementById('prenotation').innerHTML = prenotationNumber;

        // Per far comparire il box del biglietto devo cambiare la classe "hidden" in "show"
        document.getElementById('ticket').className = 'show';
    }   
);

// Cosa deve fare al click su Annulla

document.getElementById('cancel').addEventListener('click',
    function() {
        // Questo per resettare il box del biglietto 
        document.getElementById('passenger-name').innerHTML = '';
        document.getElementById('promo').innerHTML = '';
        document.getElementById('ticket-price').innerHTML = ''
        document.getElementById('carriage').innerHTML = '';
        document.getElementById('prenotation').innerHTML = '';

        // Questo per resettare la sezione degli input
        document.getElementById('name').value = '';
        document.getElementById('km').value = '';
        document.getElementById('age').value = 'none'

        // Questo per far scomparire il box del biglietto
        document.getElementById('ticket').className = 'hidden';

    }
);





/* Correzioni: 
    - Messo il prezzo di 1km dentro la funzione.
    - Aggiunto .value a nameDom
    - Nelle if dovevo utilizzare il simbolo == invece che =
    */
