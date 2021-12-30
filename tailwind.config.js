const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens:{
            'tablet' : '640px',
            'cel':{'max':'400px'},
        },
        extend: {
            colors:{
                'new-blue': '#243C5A',
                gray: {
                    ...colors.gray,
                    '900': '#999'
                }
            },
            spacing:{
                '50' : '20rem',
            }
        }
    },
    plugins: []
}
