document.getElementById("register").onclick = () => {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fullName = document.getElementById("name").value;

    firebase.auth().createUserWithEmailAndPassword(email,password).then((userCred) => {

        let theUserId = userCred.user.uid;

        firebase.firestore().collection("users").doc(theUserId).set({

            name: fullName,
            email: email,
            userId: theUserId

        }).then(()=> {
            window.location.href = "home.html"
        })
    })
}