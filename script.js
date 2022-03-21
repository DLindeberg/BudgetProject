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
        let response = await fetch('months.json');
        let response2 = await fetch('categories.json');
        let response3 = await fetch('data.json');
        let json = await response.json();
        let json2 = await response2.json();
        let json3 = await response3.json();
        this.months = json;
        this.categories = json2;
        this.data = json3;
    },

}).mount('main')