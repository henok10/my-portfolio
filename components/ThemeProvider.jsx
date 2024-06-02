'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes';  
// untuk mengelola tema (seperti mode terang atau gelap)

export default function ThemeProvider({ children, ...props }) {
    return (
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
    )
}
