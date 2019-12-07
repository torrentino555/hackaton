import React from 'react'
import { isNil } from 'ramda'
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './Product.css'
import { MAX_ID } from '../../constants'
import { NotFound } from '../NotFound'


interface Props extends RouteComponentProps<{ productId?: string, companyId?: string }> {
}

function Product({ match: { params } }: Props) {
    const { productId, companyId } = params

    console.log('sss', productId, companyId)
    const name = 'название товара'
    const companyName = 'название компании'

    // let isValidParams = false
    // if (isNil(productId) || isNil(companyId)) {
    //     return <NotFound/>
    // }
    // const parsedProductId = parseId(productId)
    const isValidParams = () => {
        if (isNil(productId) || isNil(companyId)) {
            return false
        }
        const parsedProductId = parseId(productId)
        const parsedCompanyId = parseId(companyId)
        return !(isNil(parsedProductId) || isNil(parsedCompanyId))
    }

    if (!isValidParams()) {
        return <NotFound/>
    }
    return (
        <div className="product">
            <div className="product__title"> {name} </div>
            <div className="product__company"> {companyName} </div>

            <div className="product__img"> </div>
            <div className="similar-products">
            </div>
        </div>
    )
}

function parseId(value: string) {
    const parseId = parseInt(value)
    if (!isNaN(parseId) && parseId < MAX_ID) {
        return parseId
    }
    return null
}
export default withRouter(Product)