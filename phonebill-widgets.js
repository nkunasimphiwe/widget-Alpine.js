document.addEventListener('alpine:init', () => {
    Alpine.data ('phonebillwidget', function() {
     return   { 
        yoursent : '',
        yourphoneBill: '',
        showMesage : false,
        phonebill() {
            this.yoursent= totalPhoneBill(this.yourphoneBill);
            setTimeout(() => {
                this.yoursent = '';
            }, 3000);
        }
    }
    
    }  );
})