module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                arial: 'Arial'
            },
            colors: {
                'darkblue-500': '#485769',
                'darkblue-600': '#37475A',
                'darkblue-700': '#232F3E',
                'darkblue-900': '#191E26',
                'darkblue-950': '#131A22',
                'gold-100': '#FEBD69',
                'gold-200': '#FAA63A',
                'orange-650': '#EA7911',
                yellow: '#F0C48'
            },
            spacing: {
                7: '1.75rem',
                '75px': '75px',
                '210px': '210px'
            }
        }
    },
    plugins: []
}
