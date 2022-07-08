firebase.auth().onAuthStateChanged((user)=> {
    if(user) {

      // pull book status

        firebase.firestore().collection("bookStatus").get().then((querySnapshot)=> {
            let content = '';

            querySnapshot.forEach((doc) =>{
                let bStatus = doc.data().bStatusInput;
                let docId = doc.data().docId;   
                
                content += '<option value="'+bStatus+'">'+bStatus+'</option>';
            })

            $("#bookStatus").append(content)
        })

      // add book
        document.getElementById("addBook").onclick = () => {
            let bookTitle = document.getElementById("bookTitle").value; 
            let bookDate = document.getElementById("bookDate").value;         
            let bookAuthor = document.getElementById("bookAuthor").value;
            let bookPages = document.getElementById("bookPages").value;
            let bookStatus = document.getElementById("bookStatus").value;

            let addBook = firebase.firestore().collection("books").doc();
            addBook.set({
                docId:addBook.id,
                bookDate:bookDate,           
                bookTitle:bookTitle,
                bookAuthor:bookAuthor,
                bookPages:bookPages,
                bookStatus:bookStatus
            }).then(() => {
                window.location.reload();
            })
            
        } 

      // view books

        firebase.firestore().collection("books").get().then((querySnapshot)=>{
            let content = '';
            querySnapshot.forEach((doc)=>{

                
                let bookTitle = doc.data().bookTitle;
                let bookAuthor = doc.data().bookAuthor;
                let bookPages = doc.data().bookPages;
                let bookStatus = doc.data().bookStatus;
                let docId = doc.data().docId;

                content+=    '<tr>';
                content+=    '  <td> ' + bookTitle +'</td>';              
                content+=    '  <td> ' + bookAuthor +'</td>';
                content+=    '  <td> ' + bookPages +'</td>';
                content+=    '  <td> ' + bookStatus +'</td>';
                content+=    '  <td> <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button> </td>'; 
                content+=    '  <td> <button class="btn btn-danger">Delete</button> </td>';                    
                content+=    '</tr>';

            })
            $("#bookList").append(content);
        })


        window.editBook = (value) => {
        // alert(value)
        // invoke firebase
        db.collection("books").doc(value)
        .get().then((doc) => {
            let book = doc.data().books;

            document.getElementById("addBook").value = book;

        })
    

        // edit my tweet;

        document.getElementById("addBook").onclick = () => {
        
            let newBook = document.getElementById("books").value;

            // invoke firebase;

            db.collection("books").doc(value)
            .update({
                book:newBook
            }).then(() => {
                alert('Document succesfully updated')
                window.location.href = 'home.html'
            }).catch((error) => {
                console.log(error.message);
            })
        }
        // delete tweet
        window.deleteTweet = (docId) => {
            db.collection("books").doc(docId).delete().then(() => {              
                
                alert("Document successfully deleted!")
                window.location.href = 'index.html'
            }).catch((error) => {
                console.log(error.message);
            });                  
        
        
        }   

    }
    
    }else {

    }

})