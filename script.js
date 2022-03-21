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
        },
        remainingMonthlyIncome(yearInput, monthInput) {
            let remainingMonthlyIncome = this.data[yearInput].month[monthInput].categories[0].cost;
            for (let i = 1; i < 8; i++) {
                remainingMonthlyIncome -= this.data[yearInput].month[monthInput].categories[i].cost;
            }
            console.log(remainingMonthlyIncome)
            return remainingMonthlyIncome;
        },
        monthlyExpenses(yearInput, monthInput) {
            let monthlyExpenses = 0;
            for (let i = 1; i < 8; i++) {
                monthlyExpenses += this.data[yearInput].month[monthInput].categories[i].cost;
            }
            console.log(monthlyExpenses)
            return monthlyExpenses;
        },
        // yearlyExpenses(yearInput, monthInput) {
        //     let monthlyExpenses = 0;
        //     let yearlyExpenses = 0;
        //     for (let index = 0; i < 11; i++) {
        //         yearlyExpenses += monthlyExpenses
        //         for (let i = 1; i < 8; i++) {
        //             monthlyExpenses += this.data[yearInput].month[monthInput].categories[0].cost; 
        //         }
                
        //     }
        //     console.log(monthlyExpenses)
        //     return monthlyExpenses;

        // }

    },

    mounted: async function () {
        let response = await fetch('data.json');
        let json = await response.json();
        this.data = json;
    },

}).mount('main')