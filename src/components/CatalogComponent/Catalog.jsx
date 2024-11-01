import style from './Catalog.module.css'
import { Card } from '../CardComponent/Card'
import { Category } from '../CategoryComponent/CategoryComponent'
import { products } from '../../data/data'
import { Search } from '../SearchComponent/Search'
import { useState } from 'react'

export function Catalog() {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0)
    function sort(e) {
        setSorting(e.target.value)
    }
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
            && (product.category == category || category == 0);
    })

    const sortProduct = (sorting, products) => {
        switch (sorting) {
            case 'price_up':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price_down':
                return [...products].sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    }

    const sortedProducts = sortProduct(sorting, filteredProducts)
    return (
        <>
            <div className={style.catalog}>
                <p className={style.catalog_title}>Каталог товаров</p>
                <div className={style.categories}>
                    <div className={style.category}>
                        <button
                            onClick={() => setCategory(0)}
                            className={category === 0 ? style.active : ''}>
                            Все товары
                        </button>
                        <button
                            onClick={() => setCategory(1)}
                            className={category === 1 ? style.active : ''}>
                            Шины/колеса
                        </button>
                        <button
                            onClick={() => setCategory(2)}
                            className={category === 2 ? style.active : ''}>
                            Масла
                        </button>
                        <button
                            onClick={() => setCategory(3)}
                            className={category === 3 ? style.active : ''}>
                            Ароматизаторы
                        </button>
                    </div>
                </div>
                <Search handleChange={handleChange} />
                <select className={style.sort} onChange={sort}>
                    <option value="price_up" >Менее дорогие</option>
                    <option value="price_down">Более дорогие</option>
                </select>
            </div>
            <div className={style.catalog_grid}>
                {
                    sortedProducts.length ?
                        sortedProducts.map((product, index) => {
                            return (
                                <Card {...product} />
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
        </>
    )
}