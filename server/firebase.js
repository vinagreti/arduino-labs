const admin = require('firebase-admin');

var serviceAccount = require('./micasa-558003ec85e2.json');

const FISICAL_LOCATION = 'sitio';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var Equipments = {
    Board: undefined,
    init: (board) => {
        Equipments.Board = board;
    },
    A1: db.collection(FISICAL_LOCATION).doc('A1')
};

var observer = Equipments.A1.onSnapshot(docSnapshot => {

    Equipments.A1.get()
    .then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {

            parseData(doc.data());

        }
    })
    .catch(err => {
        console.log('Error getting document', err);
    });

}, err => {
    console.log(`Encountered error: ${err}`);
});

parseData = (data) => {

    console.log('data arrived', data);

    const pins = data.pins;

    if (pins[13]) {
        Equipments.Board.on(13);
    } else {
        Equipments.Board.off(13);
    }

    

}

exports.Equipments = Equipments;