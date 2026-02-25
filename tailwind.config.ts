import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#DC2626', // red-600 from default palette as base, can be customized
                    black: '#0F172A', // slate-900 as base, rich black
                    white: '#FFFFFF',
                    dark: '#020617', // slate-950
                }
            }
        }
    },
    content: [
        './app/components/**/*.{js,vue,ts}',
        './app/layouts/**/*.vue',
        './app/pages/**/*.vue',
        './app/plugins/**/*.{js,ts}',
        './app/app.vue',
        './app/error.vue',
    ]
}
