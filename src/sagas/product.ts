import { call, fork, cancel, delay } from 'redux-saga/effects'

import * as api from '../api'
import * as actions from '../actions'
import { assertResponse } from '../errorHandling'


export function * productInitialized() {
    try {
        const response = yield call(api.getProduct, { productId: 1 })

        yield call(actions.productInitialized.success, assertResponse(response))
    } catch ({ message }) {
        yield call(actions.errorHandle.occur, message)
    } finally {
    }
}