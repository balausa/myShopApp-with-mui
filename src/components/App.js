import { useState } from 'react';
import { Container } from '@mui/material';

import BasketList from './BasketList';
import GoodsList from './GoodsList';
import Search from './Search';
import Header from './Header';
import { goods } from '../data/goods';

const App = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;
        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            console.log(order);
            quantity = order[indexInOrder].quantity + 1;

            console.log(order);
            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    };
                    console.log(order);
                }),
            );
        } else {
            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            );
        }
    };

    const removeFromOrder = (goodsItem) => {        
        debugger;
        console.log(Array.isArray(order));
        setOrder(order.filter((item) => item.id !== goodsItem));
        console.log(order);
    };

    return (
        <>
        <Header />
        <Container
            sx={{mt: '1rem'}}
        >
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
                <BasketList
                    order={order}
                    setOrder={removeFromOrder}
                />
        </Container>
        </>
    );
}

export default App;