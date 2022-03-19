Vue.createApp({
    data() {
        return {
            yearInput: '',
            monthInput: '',
            years: [
                { text: '2022', value: 2022 },
                { text: '2023', value: 2023 },
                { text: '2024', value: 2024 },
                { text: '2025', value: 2025 },
                { text: '2026', value: 2026 },
            ],
            months: [],
            categories: [],
            income: '',
            newCat: [],
        }
    },
    methods:{
        //  updateRemain(){
        //     var moneyIn = parseInt(document.getElementById("moneyIn").value);
        //     var catCost = parseInt(document.getElementById("catCost").value);
        //     var updateRemain = document.getElementById("remainingInc");
        //     updateRemain.value = moneyIn - catCost;
           
        //    }
        saveInput(){
            this.newCat.push(this.income)
            console.log(newCat)
        }

    },
    mounted: async function () {
        let response = await fetch('months.json');
        let response2 = await fetch('categories.json');
        let json = await response.json();
        let json2 = await response2.json();
        this.months = json;
        this.categories = json2;
    },


}).mount('main')