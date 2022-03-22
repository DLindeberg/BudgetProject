Vue.createApp({
    data() {
        return {
            yearInput: 0,
            monthInput: 0,
            data: [],
            
        }
    },
    methods: {
        remainingMonthlyIncome(yearInput, monthInput) {
            let remainingMonthlyIncome = this.data[yearInput].month[monthInput].categories[0].cost;
            for (let i = 1; i < 8; i++) {
                remainingMonthlyIncome -= this.data[yearInput].month[monthInput].categories[i].cost;
            }
            return remainingMonthlyIncome;

            // bugg uppstår om du lämnar den tom 
        },
        monthlyExpenses(yearInput, monthInput) {
            let monthlyExpenses = 0;
            for (let i = 1; i < 8; i++) {
                monthlyExpenses += this.data[yearInput].month[monthInput].categories[i].cost;
            }
            return monthlyExpenses;
        },
        yearlyExpenses(yearInput) {
            let yearlyExpenses = 0;
            for (let i = 0; i < 12; i++) {
                for (let x = 1; x < 8; x++) {
                    yearlyExpenses += this.data[yearInput].month[i].categories[x].cost;
                }
            }
            return yearlyExpenses;
        },
        yearlyIncome(yearInput) {
            let yearlyIncome = 0;
            for (let i = 0; i < 12; i++) {
                yearlyIncome += this.data[yearInput].month[i].categories[0].cost;
            }
            return yearlyIncome;
        },
        check(obj) {
            if (obj.cost == "") {
                obj.cost = null;
            }
            return obj.cost;
        }

    },

    mounted: async function () {
        let response = await fetch('data.json');
        let json = await response.json();
        this.data = json;
    },

}).mount('main')