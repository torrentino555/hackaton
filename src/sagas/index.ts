import { all, takeLatest } from 'redux-saga/effects'

import * as actionCreators from '../actions'
import { productInitialized } from './product'


function * rootSaga() {
    yield all([
        takeLatest(actionCreators.productInitialized.type, productInitialized)
    ])
}

export default rootSaga