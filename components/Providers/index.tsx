import { NextPageContext } from 'next'
import * as React from 'react'
import { Toast } from './Toaster'
import { ThemeProvider } from 'next-themes'

interface Props {
	children?: any
	pageProps: NextPageContext
}

const globalNavigationContext = {
	isOpen: false,
	setIsOpen: (val: boolean) => {},
}

export const GlobalNavigationContext = React.createContext(
	globalNavigationContext
)

export function Providers({ children, pageProps }: Props) {
	const initialState = {
		isOpen: false,
		setIsOpen,
	}

	const [state, setState] = React.useState(initialState)

	function setIsOpen(isOpen: boolean) {
		return setState({ ...state, isOpen })
	}

	return (
		<>
			<Toast />
			<ThemeProvider attribute='class'>
				<GlobalNavigationContext.Provider value={state}>
					{children}
				</GlobalNavigationContext.Provider>
			</ThemeProvider>
		</>
	)
}
