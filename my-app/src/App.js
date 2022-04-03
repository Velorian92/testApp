import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Shop from "./modules/Shop";
import Cart from "./modules/Cart";

function App() {

	let [url, setUrl] = useState('/')

	let Wrapper = styled.div`
		position: relative;
		padding: 10px;
	`

	let Header = styled.div`
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
    `

	function cliker(event) {
		setUrl(url = event.target.id)
	}

	return (
		<Wrapper>

			<Header>
				<button id='shop' onClick={cliker}>My Shop</button>
				<button id='cart' onClick={cliker}>My Cart</button>
			</Header>

			{
				(() => {
					if (url == 'shop') {
						return <Shop />
					}
					if (url == '/') {
						return <Shop />
					}
					if (url == 'cart') {
						return <Cart />
					}
				})()
			}

		</Wrapper>
	);
}

export default App;