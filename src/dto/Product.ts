export interface ResponseProductDTO {
    imageSrc: string
    productName: string
    productId?: number
    positionId?: number
    organizationName: string
    organizationId: number
    properties: string[]
    isProtectedDeal: boolean
    price: number
}

export interface ResponseSimilarProductsDTO {
    products: ResponseProductDTO[]
}

export interface RequestSimilarProductOffersDTO {
    productId: number
    currentOrganizationId: number
}

export interface RequestProductDTO {
    productId: number
}