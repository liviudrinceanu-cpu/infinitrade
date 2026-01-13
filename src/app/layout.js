import './globals.css'

export const metadata = {
  title: 'Infinitrade Romania | Echipamente Industriale Premium',
  description: 'Dăm puls industriei. Distribuitor de echipamente industriale, pompe, robineți, motoare electrice, schimbătoare de căldură și suflante. Peste 500 de branduri internaționale.',
  keywords: 'echipamente industriale, pompe industriale, robineti industriali, motoare electrice, schimbatoare caldura, suflante, mentenanta industriala, piese schimb',
  openGraph: {
    title: 'Infinitrade Romania | Echipamente Industriale Premium',
    description: 'Dăm puls industriei. Distribuitor de echipamente industriale premium cu livrare rapidă.',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
