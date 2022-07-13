document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget', function(){
        return {
            name: '',
            message: '',
            greetMe() {

                this.message = greet(this.name);
                setTimeout(() => {
                    this.message = '';
                }, 3000);
            }
        }
    });
})