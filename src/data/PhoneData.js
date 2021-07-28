let i = 0;

export var phones = [
    {   
        id: ++i,
        model: 'Mortal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare ipsum in fermentum venenatis. Suspendisse.',
        version: 'X',
        price: '500$',
        discount: '20%',
        soldOut: false,
        img: '../icons/smartphone.png',
        colors: ['red', 'green', 'blue', 'white'],
        options: ['3GB/64GB', '4GB/64GB','4GB/128G'],
        spec: {
            camera: '48MP, 8MP',
            chipset: 'Creeper 2G',
            GPU: 'EnderDragon 660GB 2GB',
            weights: '0.3kg',
            screen: 'Super Amoled 6.3inch',
            battery: '6000mAh',
            resolution: 'Full HD 1920 x 1080',
            OS: 'Android 10',
            charge: 'TurboCharge 55W'
        },
    },
    {   
        id: ++i,
        model: 'Frost',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare ipsum in fermentum venenatis. Suspendisse.',
        version: 'II',
        price: '200$',
        discount: '00%',
        soldOut: true,
        img: './icons/smartphone.png',
        colors: ['red', 'blue', 'black'],
        options: [ '4GB/64G','6GB/128G'],
        spec: {
            camera: '48MP, 8MP',
            chipset: 'Spider 4.0',
            GPU: 'StrikeBreaker 780 4GB',
            screen: 'Super Amoled 6.5inch',
            resolution: 'Full HD 1920 x 1080',
            battery: '5100mAh',
            OS: 'Android 10',
            weights: '0.3kg',
            charge: 'TurboCharge 60W'
        }
    },
    {   
        id: ++i,
        model: 'Infinity',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare ipsum in fermentum venenatis. Suspendisse.',
        version: '2.0',
        price: '800$',
        discount: '20%',
        soldOut: false,
        img: './icons/smartphone.png',
        colors: ['red', 'blue'],
        options: ['3GB/64GB','4GB/64GB', '6GB/128GB'],
        spec: {
            camera: '48MP, 8MP',
            chipset: 'Iron Golem 2GB',
            GPU: 'Wither 30T 4BG',
            weights: '0.3kg',
            screen: 'Super Amoled 6.0inch',
            battery: '5000mAh',
            resolution: 'Full HD 1920 x 1080',
            OS: 'Android 10',
            charge: 'TurboCharge 30W'
        }
    }
]

phones.forEach(phone => {
    phone.code = phone.model.toUpperCase() + phone.version.toUpperCase();
})
