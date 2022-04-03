import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import Shop from "./modules/Shop";
import Cart from "./modules/Cart";
import Layout from './modules/layout';

function App() {


	let Wrapper = styled.div`
		position: relative;
		padding: 10px;
	`
	
	return (
		<Wrapper>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Shop />} />
						<Route path="/cart" element={<Cart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Wrapper>
	);
}

export default App;