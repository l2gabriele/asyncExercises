function queryFirstDoc(callback) {
  setTimeout(() => {
    var doc1 = {dumbProp: "dumbValue"};
    callback(doc1);
  }, 2000);
};

function querySecondDoc(callback) {
  setTimeout(() => {
    var doc2 = {dumbProp2: "dumbValue2"};
    callback(doc2);
  }, 2000);
};

function queryThirdDoc(callback, err) {
  setTimeout(() => {
    var doc3 = {dumbProp3: "dumbValue3"};
    if (doc3){
      callback(doc3);
    } else {
      err("doc 3 isn't found");
    }
  }, 2000);
};


queryFirstDoc((data)=>{
  
})

//Fill in the function in query first doc to log "We finally have all our docs - {dumbProp1}, {dumbProp2}, {dumpProp3}"
/I created an error handling mechanism for queryThirdDoc(), which can be used like this:
// queryThirdDoc(function(doc){
//   console.log(doc)
// }, function(errMessage){
//  console.log(errMessage)
// });
//edit the function queryThirdDoc to make the error "catch" or get executed.

//Then, edit queryFirstDoc and querySecondDoc to use a similar mechanism. Be sure to test them out
