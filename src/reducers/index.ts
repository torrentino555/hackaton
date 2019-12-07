import { History } from 'history'

import errorHandle, { ErrorHandleState } from './ErrorHandle'
import product, { ProductState } from './Product'


export interface State {
    router: { history: History }
    errorHandle: ErrorHandleState,
    product: ProductState
}

export {
    errorHandle,
    product
}