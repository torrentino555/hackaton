import { createReducer } from 'redux-from-void'
import { errorHandle, productInitialized } from '../actions'
import { ResponseProductDTO } from '../dto/Product'


export interface ProductState {
    imageSrc: string
    productName: string
    productId: number | null
    positionId: number | null
    organizationName: string
    organizationId: number | null
    properties: string[]
    isProtectedDeal: boolean
    price: number | null
}

const initialState : ProductState = {
    imageSrc: '',
    productName: '',
    productId: null,
    positionId: null,
    organizationName: '',
    organizationId: null,
    properties: [],
    isProtectedDeal: false,
    price: null
}

export default createReducer(initialState)(
    productInitialized.success,
    (_: any, { payload } : { payload: ResponseProductDTO }) => ({
        ...payload
    }),

    productInitialized,
    initialState
)