var client = algoliasearch('A2CZQP61F0', '3898a6da222fc6822b20ae4cfb944087');
var index = client.initIndex('quotes');
var quotesJSON = json;

index.addObjects(quotesJSON, function(err, content) {
  if(err){
    console.error(err);
  }
});
