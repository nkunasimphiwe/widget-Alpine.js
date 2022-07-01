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
            setTimeout(() => {
                this.yourSentence = '';
            }, 3000);
        },
        shortestWord(){
            this.yourSentenc = shortestWord(this.yourShortestWord);
            setTimeout(() => {
                this.yourSentenc = '';
            }, 3000);
        },
        wordLenght(){
            this.yourSenten=wordLengths(this.yourWordLenght)
            setTimeout(() => {
                this.yourSenten = '';
            }, 3000);
        }
    }
    
    }  );
})