
export class ProductsAdvanced {
    id!: number;
    title!: string;
    price!: number;
    description!: string
    category!: string
    rating!: number
    discountPercentage!: number
    stock!: number
    tags!: string[]
    brand!: string
    sku!: string
    weight!: number
    dimensions!: Dimensions
    warrantyInformation!: string
    shippingInformation!: string
    availabilityStatus!: string
    reviews!: Reviews[]
    returnPolicy!: string
    minimumOrderQuantity!: number
    meta!: Meta
    images?: string[]
    thumbnail!: string

}

class Images{
    img!: string
}

class Dimensions {
    width!: number
    height!: number
    depth!: number
}

class Reviews{
    
    rating!: number
    comment!: string
    date!: string
    reviewerName!: string
    reviewerEmail!: string
    
}

class Meta{
    createdAt!: string
    updatedAt!: string
    barcode!: string
    qrCode!: string
}