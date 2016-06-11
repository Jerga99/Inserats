import firebase from 'firebase';

try {

    var config = {
        apiKey: "AIzaSyBOnBFPIVrEcKVw8-yMQUBZpxEUJ-QWkDs",
        authDomain: "project-8950362203197573747.firebaseapp.com",
        databaseURL: "https://project-8950362203197573747.firebaseio.com",
        storageBucket: "project-8950362203197573747.appspot.com"
    };

    firebase.initializeApp(config);
} catch(e){

}

export var gitHubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();

export default firebase;