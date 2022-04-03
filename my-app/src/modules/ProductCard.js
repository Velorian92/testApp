import styled from 'styled-components'

export default function ProductCard(props) {

    let Wrapper = styled.div`
        width: 100%;

        padding: 10px;

        border: .1px solid black;
        border-radius: 5px;

        text-align: center;

        display: '';

        img{
            width: 100%;
            border: .1px solid black;
            border-radius: 5px;
        }
    `

    let delVal, addVal;

    (function () {

        if (window.location.href == 'http://localhost:3000/') {
            delVal = 'none'
            addVal = ''
        }

        if (window.location.href == 'http://localhost:3000/cart') {
            delVal = ''
            addVal = 'none'
        }

    })()

    let DeleteButton = styled.button`
        display: ${delVal};
    `
    let Comments = styled.span`
       display: none;
   `

    let AddButton = styled.button`
        display: ${addVal};
   `

    function addToCart() {
        localStorage.setItem(props.name, props.identificator)
    }

    function deleteFromCart() {
        localStorage.removeItem(props.name)
    }

    return (
        <Wrapper identificator={props.id}>

            <p>Model: {props.name}</p>
            <img src={props.imageUrl} />
            <p>Remaining in stock: {props.count}</p>
            <p>Phone width: {props.width}</p>
            <p>Phone height: {props.height}</p>
            <p>Phone weight: {props.weight}</p>

            <AddButton onClick={addToCart}>Add  to cart</AddButton>
            <DeleteButton onClick={deleteFromCart} className='deleteButton'>Delete from cart</DeleteButton>

            <Comments>
                <p>Some User</p>
                <p>{props.comments}</p>
            </Comments>

        </Wrapper>
    )
}