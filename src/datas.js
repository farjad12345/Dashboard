let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]


const newMembers = [
    {
        id: 1,
        username: 'Farjad Babapour',
        title: 'Web Developer',
        img:'images/avator.jpeg'
    },
    {
        id: 2,
        username: 'Reza Ghasemi',
        title: 'Seo Eng',
        img:'images/avator.jpeg'
    },
    {
        id: 3,
        username: 'Homa Agaie',
        title: 'Weblog',
        img:'images/avator.jpeg'
    },
    {
        id: 4,
        username: 'Hasan Esmaelie',
        title: 'CEO',
        img:'images/avator.jpeg'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'Qadir Yolme',
        date: '12 Jun 2022',
        amount: "$122",
        status: 'Approved',
        img:"images/avator.jpeg"
    },
    {
        id: 2,
        customer: 'Amin Saeedi',
        date: '23 Jul 2022',
        amount: "$242",
        status: 'Declined',
        img:"images/avator.jpeg"
    },
    {
        id: 3,
        customer: 'reza golab',
        date: '28 May 2022',
        amount: "$543",
        status: 'Pending',
        img:"images/avator.jpeg"
    },
    {
        id: 4,
        customer: 'Sasan mojab',
        date: '1 Feb 2022',
        amount: "$672",
        status: 'Approved',
        img:"images/avator.jpeg"
    },
]

let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: 'images/qadir.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'qadir@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'images/amin.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: 'images/sasan.jpg',
        status: 'active',
        transaction: '$98',
        email: 'sasan@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'images/zahra.jpg',
        status: 'active',
        transaction: '$9.65',
        email: 'zahra@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'images/hamze.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'hamze@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/hp.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        price: 890
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export { xAxisData, newMembers, transactions, userRows, products, productsData }