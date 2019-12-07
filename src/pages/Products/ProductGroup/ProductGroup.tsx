import React, { useState } from 'react'
import cn from 'classnames'

import './ProductGroup.css'
import Button from '../../../primitives/Button'


export default function ProductGroup() {
    const [ isActive, setIsActive ] = useState(true)

    return (
        <div className={ cn('product-group', isActive && 'products-group_active') }>
            <Button className="product-group__header" onClick={ () => setIsActive(false) }>
            </Button>
            Список товаров
        </div>
    )
}