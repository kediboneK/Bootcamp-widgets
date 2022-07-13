document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBillWidget', function () {
        return {
            airtimeUsage: '',
            airtimeMessage: '',
            calculate() {
                const message = totalPhoneBill(this.airtimeUsage);
                this.airtimeMessage = message;
            }
        }
    });
})