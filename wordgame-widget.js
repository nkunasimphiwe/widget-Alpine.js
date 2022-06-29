document.addEventListener('alpine:init', () => {
    Alpine.data ('enoughairtimewidget', function() {
     return   { 
        airtimeUsage : '',
        availableBalance : 0.00,
        airtimeMessage : '',
        calculate(){
            this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.available);
        }
    }
    
    }  );
})