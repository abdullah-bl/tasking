import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Providers } from 'components/Providers'
import { LoginErrorToast } from 'components/LoginErrorToast'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Providers pageProps={pageProps}>
			<LoginErrorToast />
			<Component {...pageProps} />
		</Providers>
	)
}

export default MyApp
