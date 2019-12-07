import { post } from './config'
import { ResponseProductDTO, ResponseSimilarProductsDTO, RequestProductDTO, RequestSimilarProductOffersDTO } from '../dto/Product'


export const getProduct = (postObj: RequestProductDTO) : Promise<ResponseProductDTO> =>
    new Promise<ResponseProductDTO>(resolve => {
    resolve({
        productId: 1,
        productName: 'Фанера 10 мм ФК нешлифованная 1525x1525 мм сорт 4/4, 2.325 м2',
        properties: [
            'Площадь (м²): 2.33',
            'Толщина (мм): 10.0',
            'Длина (см): 152.5',
            'Вес, кг: 15.117',
            'Страна производства: Россия'
        ],
        imageSrc: 'https://i.ytimg.com/vi/4Z21-XXji5c/maxresdefault.jpg',
        isProtectedDeal: true,
        organizationId: 1,
        organizationName: 'Леруа Мерлен',
        price: 200
    })
})

export const getSimilarProductOffers = (postObj: RequestSimilarProductOffersDTO) : Promise<ResponseSimilarProductsDTO> =>
    new Promise<ResponseSimilarProductsDTO>(resolve => {
        resolve({
            products: [
                {
                    productId: 1,
                    productName: 'Фанера 10 мм ФК нешлифованная 1525x1525 мм сорт 4/4, 2.325 м2',
                    properties: [
                        'Площадь (м²): 2.33',
                        'Толщина (мм): 10.0',
                        'Длина (см): 152.5',
                        'Вес, кг: 15.117',
                        'Страна производства: Россия'
                    ],
                    imageSrc: 'https://i.ytimg.com/vi/4Z21-XXji5c/maxresdefault.jpg',
                    isProtectedDeal: true,
                    organizationId: 2,
                    organizationName: 'Леруа Мерлен',
                    price: 200
                },
                {
                    productId: 1,
                    productName: 'Фанера 10 мм ФК нешлифованная 1525x1525 мм сорт 4/4, 2.325 м2',
                    properties: [
                        'Площадь (м²): 2.33',
                        'Толщина (мм): 10.0',
                        'Длина (см): 152.5',
                        'Вес, кг: 15.117',
                        'Страна производства: Россия'
                    ],
                    imageSrc: 'https://i.ytimg.com/vi/4Z21-XXji5c/maxresdefault.jpg',
                    isProtectedDeal: true,
                    organizationId: 3,
                    organizationName: 'Леруа Мерлен',
                    price: 200
                },
                {
                    productId: 1,
                    productName: 'Фанера 10 мм ФК нешлифованная 1525x1525 мм сорт 4/4, 2.325 м2',
                    properties: [
                        'Площадь (м²): 2.33',
                        'Толщина (мм): 10.0',
                        'Длина (см): 152.5',
                        'Вес, кг: 15.117',
                        'Страна производства: Россия'
                    ],
                    imageSrc: 'https://i.ytimg.com/vi/4Z21-XXji5c/maxresdefault.jpg',
                    isProtectedDeal: true,
                    organizationId: 4,
                    organizationName: 'Леруа Мерлен',
                    price: 200
                },
                {
                    productId: 1,
                    productName: 'Фанера 10 мм ФК нешлифованная 1525x1525 мм сорт 4/4, 2.325 м2',
                    properties: [
                        'Площадь (м²): 2.33',
                        'Толщина (мм): 10.0',
                        'Длина (см): 152.5',
                        'Вес, кг: 15.117',
                        'Страна производства: Россия'
                    ],
                    imageSrc: 'https://i.ytimg.com/vi/4Z21-XXji5c/maxresdefault.jpg',
                    isProtectedDeal: true,
                    organizationId: 5,
                    organizationName: 'Леруа Мерлен',
                    price: 200
                },
                {
                    productId: 1,
                    productName: 'Фанера 10 мм ФК нешлифованная 1525x1525 мм сорт 4/4, 2.325 м2',
                    properties: [
                        'Площадь (м²): 2.33',
                        'Толщина (мм): 10.0',
                        'Длина (см): 152.5',
                        'Вес, кг: 15.117',
                        'Страна производства: Россия'
                    ],
                    imageSrc: 'https://i.ytimg.com/vi/4Z21-XXji5c/maxresdefault.jpg',
                    isProtectedDeal: true,
                    organizationId: 6,
                    organizationName: 'Леруа Мерлен',
                    price: 200
                }
            ]
        })
})

// export const getProduct = (postObj: PostProductDTO) : Promise<GetProductDTO> => post('/getProduct', postObj)
// export const getSimilarProduct = (postObj: RequestSimilarProductOffersDTO) => post('/getSimilarProductOffers', postObj)