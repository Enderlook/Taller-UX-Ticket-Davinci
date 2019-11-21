let app = new Vue({
    el: '#app',
    data: {
        main: true,
    },
    methods: {
        toggleQR: function() {
            if (this.$refs.main.classList.contains("hidden")) {
                this.menu();
            } else {
                this.$refs.main.classList.add("hidden");
                this.$refs.popup.classList.remove("hidden");
            }
        },
        menu: function() {
            this.$refs.main.classList.remove("hidden");
            this.$refs.popup.classList.add("hidden");
        }
    }
})