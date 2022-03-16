Vue.createApp({
    data() {
        return {
            monthInput: '',
            monthOptions: [
                { text: 'January', value: 'jan'},
                { text: 'February', value: 'feb'},
                { text: 'March', value: 'mar'},
                { text: 'April', value: 'apr'},
                { text: 'May', value: 'may'},
                { text: 'June', value: 'jun'},
                { text: 'July', value: 'jul'},
                { text: 'August', value: 'aug'},
                { text: 'September', value: 'sep'},
                { text: 'October', value: 'oct'},
                { text: 'November', value: 'nov'},
                { text: 'December', value: 'dec'},
            ],
            yearInput: '',
            yearOptions: [
                { text: '2022', value: 2022},
                { text: '2023', value: 2023},
                { text: '2024', value: 2024},
                { text: '2025', value: 2025},
                { text: '2026', value: 2026},
            ],
            yearList: []

        }
    },
    methods:{
        saveInput(){
            let month = monthInput;
            let year = yearInput;
            alert('hej')
        }
    }
}).mount('main')


