let photos = ['https://cdn.discordapp.com/attachments/1010959692450770994/1043944672336293919/image.png', 'https://cdn.discordapp.com/attachments/1010959692450770994/1043945517689864312/IMG_20190430_195126.jpg', 'https://cdn.discordapp.com/attachments/1010959692450770994/1043945900881477642/IMG_20191207_161900.jpg', 'https://cdn.discordapp.com/attachments/1010959692450770994/1044263598651875388/image.png', 'https://cdn.discordapp.com/attachments/1010959692450770994/1043946468312096848/IMG-20170910-WA0011.jpg', 'https://cdn.discordapp.com/attachments/1010959692450770994/1043946613757984929/IMG-20170925-WA0015.jpeg', 'https://cdn.discordapp.com/attachments/1010959692450770994/1043946730393186315/IMG-20180322-WA0002.jpg', 'https://cdn.discordapp.com/attachments/1010959692450770994/1043946757224144987/IMG-20180612-WA0012.jpg', 'https://cdn.discordapp.com/attachments/1010959692450770994/1043946876170416330/IMG-20180901-WA0004.jpeg', 'https://cdn.discordapp.com/attachments/1010959692450770994/1043946991236960366/IMG-20181217-WA0001.jpg'];
let titles = ['Карим в Патриотичной мачало-шапке', 'Карим думает о смысле Грузии', 'Карим Санта клаус', 'Карим аль-хатаб', 'Карим Пикапер', 'Карим умыр', 'Карим Магает', 'Карим ест', 'Карим балатируется в мэ м/р ы', 'Карим гаймер'];
let counter = -1;

$('button').on('click', function () {
        counter++;
        $('h1').html(
            titles[counter]
            )
            
        $('img').attr("src", photos[counter]);

        $('img').css({
            'width': '500px' 
        })
        $('button').html('<b> Следующий ♂️Карим♂️ </b>')
})

if (counter == 9) {
    $('.container').html('<h1>Спасибо за возбуждение</h1>')
}
