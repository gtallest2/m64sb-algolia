var client = algoliasearch('A2CZQP61F0', '78429c5ee9cb638cdfc5bac29920f907');
var index = client.initIndex('quotes');
var quotesJSON = json;

index.addObjects(quotesJSON, function(err, content) {
  if(err){
    console.error(err);
  }
});
