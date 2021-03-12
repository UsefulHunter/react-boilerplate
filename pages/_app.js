import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
const GlobalStyle = createGlobalStyle`
  ${normalize}
`

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
