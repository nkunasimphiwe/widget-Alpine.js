function longestWord(yourLogestWord) {
    var splitLongWord = yourLogestWord.split(" ");
    let maxLength = 0;
      let results = "";
      
      for (var i = 0; i < splitLongWord.length; i++) {
        if (splitLongWord[i].length >= maxLength) {
        maxLength = splitLongWord[i].length;
          results = splitLongWord[i];
        }
      }
      return results;
    }
    
    function shortestWord(yourShortestWord) {
        var splitshortWord = yourShortestWord.split(" ");
          let results = splitshortWord[0];
          
          for (var i = 0; i < splitshortWord.length; i++) {
            if (splitshortWord[i].length <= results.length) {
              results = splitshortWord[i];
            }
          }
          return results;
        }

        function wordLengths(yourWordLenght) {
            var splitwordleng = yourWordLenght.split(" ");
              let wordlen = splitwordleng.map(w => w.length)
              let sum = 0;
              
              for (var i = 0; i < wordlen.length; i++) {
                sum += wordlen[i];
              }
              return sum;
            }
    
    