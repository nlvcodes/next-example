import React from 'react';


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang={'en'}>
        <body>
            <p>This is a root layout file, add global tracking here</p>
            {children}
        </body>
        </html>
    )
}