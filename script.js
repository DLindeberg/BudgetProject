Vue.createApp({
    data() {
        return {
            yearInput: 0,
            monthInput: 0,
            data: [],
        }
    },
    methods: {
        saveCost(data, yearInput, monthInput) {
            console.log(data)
            console.log(monthInput)
        }
    },
    mounted: async function () {
        let response = await fetch('data.json');
        let json = await response.json();
        this.data = json;
    },

}).mount('main')