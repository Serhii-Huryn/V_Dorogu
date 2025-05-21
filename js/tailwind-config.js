tailwind.config = {
    theme: {
        screens: {
            'sm': '320px',
            'md': '768px',
            'lg': '1024px'
        },
        extend: {
            colors: {
                primary: '#FFD336',
                secondary: '#1F2937'
            },
            borderRadius: {
                'none': '0px',
                'sm': '4px',
                DEFAULT: '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'full': '9999px',
                'button': '8px'
            }
        }
    }
}