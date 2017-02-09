var client = algoliasearch('A2CZQP61F0', '3898a6da222fc6822b20ae4cfb944087');
var index = client.initIndex('quotes');

autocomplete('#search-input',
{ hint: false }, {
    source: autocomplete.sources.hits(index, {hitsPerPage: 7}),
    //value to be displayed in input control after user's suggestion selection
    displayKey: function(suggestion) {
      return `${suggestion.quote} - ${suggestion.characterName}`;
    },
    //hash of templates used when rendering dataset
    templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(suggestion) {
          return '<span>' +
            suggestion._highlightResult.quote.value + '</span> <span>' +
            suggestion._highlightResult.characterName.value + '<span class="' + suggestion.characterClass + '" style="background-size:30px;width:30px;height:30px;display:inline-block;background-repeat:no-repeat;vertical-align:middle;">&nbsp;</span></span>';
        }
    }
}).on('autocomplete:selected', function(event, suggestion, dataset) {
  $('#search input').keyup();
});

// var quotesJSON = json;

// index.addObjects(quotesJSON, function(err, content) {
//   if(err){
//     console.error(err);
//   }
// });
// index.search('rocco', function(err, content) {
//   console.log(content.hits);
// });
