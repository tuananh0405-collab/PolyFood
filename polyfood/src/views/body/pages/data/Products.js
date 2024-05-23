// 20230813183152
// https://api.polyfood.store/api/Product/getallproductfrontend


const productsList = [
    {
      "id": "2025",
      "sku": "2025key180",
      "name": "Cá thu kho tộ",
      "price": 200000,
      "discount": 50,
      "new_product": false,
      "rating": 0,
      "stock": 4,
      "saleCount": 4,
      "tag": [
        "Món Chay Mặn"
      ],
      "category": [
        "Món Chay Mặn"
      ],
      "image":
        "https://res.cloudinary.com/doedovklj/image/upload/v1687924612/xyz-abc_638235466120981946image.jpg"
      ,
      "shortDescription": "Mo ta 2",
      "fullDescription": "text abc"
    },
    {
      "id": "1",
      "sku": "1key126",
      "name": "Cá kho tộ chay",
      "price": 60000,
      "discount": 0,
      "new_product": false,
      "rating": 0,
      "stock": 0,
      "saleCount": 0,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686060996/xyz-abc_638216829917670133image.webp",
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2",
      "sku": "2key123",
      "name": "Giò nấm 1kg",
      "price": 95000,
      "discount": 5,
      "new_product": false,
      "rating": 4,
      "stock": 172,
      "saleCount": 172,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686061449/xyz-abc_638216834449492689image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2007",
      "sku": "2007key94",
      "name": "Giò phổ tai chay",
      "price": 100000,
      "discount": 2,
      "new_product": false,
      "rating": 3,
      "stock": 105,
      "saleCount": 105,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686795628/xyz-abc_638224176254378331image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2015",
      "sku": "2015key127",
      "name": "Chả lá lốt",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 5,
      "stock": 81,
      "saleCount": 81,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843525/xyz-abc_638224655229647634image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "1002",
      "sku": "1002key20",
      "name": "KHOAI MÔN LỆ PHỐ HÀ NỘI",
      "price": 56000,
      "discount": 1,
      "new_product": false,
      "rating": 0,
      "stock": 115,
      "saleCount": 115,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686122885/xyz-abc_638217448807644326image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2023",
      "sku": "2023key93",
      "name": "Cá kèo",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Món Chay Mặn"
      ],
      "category": [
        "Món Chay Mặn"
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843999/xyz-abc_638224659952425887image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2019",
      "sku": "2019key147",
      "name": "Thịt nướng",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 5,
      "stock": 98,
      "saleCount": 98,
      "tag": [
        "Món Chay Mặn"
      ],
      "category": [
        "Món Chay Mặn"
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843859/xyz-abc_638224658566358017image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2005",
      "sku": "2005key119",
      "name": "Dồi chay",
      "price": 45000,
      "discount": 1,
      "new_product": false,
      "rating": 5,
      "stock": 199,
      "saleCount": 199,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686758586/xyz-abc_638223805845755270image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2018",
      "sku": "2018key124",
      "name": "Bò xào",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Món Chay Mặn"
      ],
      "category": [
        "Món Chay Mặn"
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843833/xyz-abc_638224658308594497image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2009",
      "sku": "2009key49",
      "name": "Bánh gối",
      "price": 45000,
      "discount": 1,
      "new_product": false,
      "rating": 0,
      "stock": 110,
      "saleCount": 110,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686795842/xyz-abc_638224178403663319image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2006",
      "sku": "2006key48",
      "name": "Heo quay chay 200g",
      "price": 40000,
      "discount": 1,
      "new_product": false,
      "rating": 0,
      "stock": 116,
      "saleCount": 116,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686795496/xyz-abc_638224174930676162image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2022",
      "sku": "2022key113",
      "name": "Đùi gà chay",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Món Chay Mặn"
      ],
      "category": [
        "Món Chay Mặn"
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843927/xyz-abc_638224659242706526image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2021",
      "sku": "2021key198",
      "name": "Tôm tẩm vừng",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Món Chay Mặn"
      ],
      "category": [
        "Món Chay Mặn"
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843882/xyz-abc_638224658791470331image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2016",
      "sku": "2016key93",
      "name": "Salat rau",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Món Nộm"
      ],
      "category": [
        "Món Nộm"
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843613/xyz-abc_638224656095986860image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2011",
      "sku": "2011key120",
      "name": "Lẩu Thái Chay",
      "price": 100000,
      "discount": 0,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686796211/xyz-abc_638224182086300970image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2010",
      "sku": "2010key87",
      "name": "Trứng ốp la Thuần chay - Vegan Omelet",
      "price": 90000,
      "discount": 0,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686796009/xyz-abc_638224180058168999image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2008",
      "sku": "2008key89",
      "name": "Chả quế chay - 500g- 1kg",
      "price": 45000,
      "discount": 5,
      "new_product": false,
      "rating": 0,
      "stock": 119,
      "saleCount": 119,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686795786/xyz-abc_638224177828816501image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2037",
      "sku": "2037key20",
      "name": "Cơm sushi",
      "price": 50000,
      "discount": 25,
      "new_product": false,
      "rating": 0,
      "stock": 34,
      "saleCount": 34,
      "tag": [
        "Món Cơm"
      ],
      "category": [
        "Món Cơm"
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1688397846/xyz-abc_638240198430863982image.webp"
      ],
      "shortDescription": "Món ăn này rất hợp cho trẻ nhỏ, người đi picnic hay bữa ăn văn phòng, đơn giản mà đầy đủ dinh dưỡng.",
      "fullDescription": "Món ăn này rất hợp cho trẻ nhỏ, người đi picnic hay bữa ăn văn phòng, đơn giản mà đầy đủ dinh dưỡng."
    },
    {
      "id": "2020",
      "sku": "2020key25",
      "name": "Chả lá lốt",
      "price": 41000,
      "discount": 100,
      "new_product": false,
      "rating": 0,
      "stock": 300,
      "saleCount": 300,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843870/xyz-abc_638224658679865153image.webp"
      ],
      "shortDescription": "Mô tả ngắn",
      "fullDescription": "Mô tả dài"
    },
    {
      "id": "2013",
      "sku": "2013key90",
      "name": "Mọc Chay",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 99,
      "saleCount": 99,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843461/xyz-abc_638224654564975162image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2012",
      "sku": "2012key93",
      "name": "Heo Quay Chay",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 99,
      "saleCount": 99,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843306/xyz-abc_638224653014020141image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2017",
      "sku": "2017key78",
      "name": "Sườn chua ngọt",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Món Chay Mặn"
      ],
      "category": [
        "Món Chay Mặn"
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843814/xyz-abc_638224658094896437image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    },
    {
      "id": "2014",
      "sku": "2014key22",
      "name": "Dồi Chay",
      "price": 50000,
      "discount": 10,
      "new_product": false,
      "rating": 0,
      "stock": 100,
      "saleCount": 100,
      "tag": [
        "Hàng chay cấp đông "
      ],
      "category": [
        "Hàng chay cấp đông "
      ],
      "image": [
        "https://res.cloudinary.com/doedovklj/image/upload/v1686843502/xyz-abc_638224654991591816image.webp"
      ],
      "shortDescription": "dữ liệu chưa được cập nhật",
      "fullDescription": "dữ liệu chưa được cập nhật"
    }
  ]
export default productsList;
