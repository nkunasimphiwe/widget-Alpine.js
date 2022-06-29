
document.addEventListener('alpine:init', () => {
    Alpine.data ('wordgameWidget', function() {
     return   { 
        yourSentence : '',
        yourSentenc : '',
        yourSenten : '',
        yourLogestWord : '',
        yourShortestWord : '',
        yourWordLenght : '',
        showLogestWord(){
            this.yourSentence = longestWord(this.yourLogestWord);
        },
        shortestWord(){
            this.yourSentenc = shortestWord(this.yourShortestWord);
        },
        wordLenght(){
            this.yourSenten=wordLengths(this.yourWordLenght)
        }
    }
    
    }  );
})