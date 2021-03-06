import { createWrap, reactions } from 'redux-from-void'


export const wrap = createWrap()

const {
    errorHandle
} = reactions(wrap, [ 'occur', 'clear' ])

const {
    productInitialized
} = reactions(wrap, [ 'success' ])

export {
    errorHandle,
    productInitialized
}