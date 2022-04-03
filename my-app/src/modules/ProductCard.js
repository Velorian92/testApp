import styled from 'styled-components'

export default function ProductCard(props) {

    let Wrapper = styled.div`
        width: 100%;

        padding: 10px;

        border: .1px solid black;
        border-radius: 5px;

        text-align: center;

        img{
            width: 100%;
            border: .1px solid black;
            border-radius: 5px;
        }
    `

    let Comments = styled.span`
        display: none;
    `

    let AddButton = styled.button`
    
    `

    let DeleteButton = styled.button`
        /* display: none; */
    `
    
    function addToCart () {
        localStorage.setItem(props.name,props.identificator)
    }

    function deleteFromCart (event) {
        localStorage.removeItem(props.name)
        console.log(event)
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
            <DeleteButton onClick={deleteFromCart}>Delete from cart</DeleteButton>

            <Comments>
                <p>Some User</p>
                <p>{props.comments}</p>
            </Comments>

        </Wrapper>
    )
}