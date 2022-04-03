import styled from 'styled-components'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'

export default function Shop() {

    let Wrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        margin-top: 10px;
    `

    let [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/dbEmit/data.json')
            .then(res => {
                return res.text()
            })
            .then(data => {
                return JSON.parse(data)
            })
            .then(data => {
                setData([...data])
            })
    }, [])

    if (data) {
        return (
            <Wrapper>
                <h1>This is my Shop</h1>
                {data.map(dataForCard => {
                    return <ProductCard
                        identificator={dataForCard['id']}
                        name={dataForCard['name']}
                        imageUrl={dataForCard['imageUrl']}
                        count={dataForCard['count']}
                        width={dataForCard['size']['width']}
                        height={dataForCard['size']['height']}
                        weight={dataForCard['weight']}
                    />
                })}
            </Wrapper>
        )
    } else {
        throw console.log('Wooooops, we are fucked up')
    }
}