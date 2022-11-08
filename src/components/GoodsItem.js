import React from 'react';

const GoodsItem = (props) => {
    const { name, price, setOrder, poster} = props;

    return (
        <div className='col-12 col-md-6 px-md-2'>
            <div className='card'>
                <img
                    width={200}
                    height={200}
                    src={poster}
                    className='card-img-top'
                    alt={name}
                />
                <div className='card-body'>
                    <h3 className='card-title'>Автор:{name.slice(0,12)}</h3>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Цена: {price} руб.</p>
                    <button
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;