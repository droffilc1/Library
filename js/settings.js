firebase.auth().onAuthStateChanged((user)=>{
  if(user){

      //add book status
      document.getElementById("savedBook").onclick = function(){
          let bStatusInput = document.getElementById("bStatusInput").value;

          let addBook = firebase.firestore().collection("bookStatus").doc();
          addBook.set({
            bStatusInput:bStatusInput,
              docId:addBook.id
          }).then(()=>{
              window.location.reload();
          })
      }


      
      //view book status
      firebase.firestore().collection("bookStatus").get().then((querySnapshot)=>{
          let content = '';
          querySnapshot.forEach((doc)=>{

              let bStatus = doc.data().bStatusInput;
              let docId = doc.data().docId;

              content+=    '<tr>';
              content+=    '  <td> ' + bStatus +'</td>';
              content+=    '  <td> <button class="btn btn-danger">Delete</button> </td>';                    
              content+=    '</tr>';

          })
          $("#bookStatusList").append(content);
      })

      
  }else{
      window.location.href = "index.html";
  }
})