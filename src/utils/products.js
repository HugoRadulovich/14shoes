const products = [{"id":1,"nombre":"NIKE X JORDAN ORANGE","precio":150,"genero":"Female","img":"../multimedia/1.png","cantidad ":1},
{"id":2,"nombre":"NIKE X OFF WHITE RED","precio":1000,"genero":"Female","img":"../multimedia/2.png","cantidad ":1},
{"id":3,"nombre":"NIKE X JORDAN BLACK/PINK","precio":100,"genero":"Female","img":"multimedia/3.png","cantidad ":1},
{"id":4,"nombre":"NIKE X OFF WHITE SKY","precio":1200,"genero":"Male","img":"multimedia/4.png","cantidad ":1},
{"id":5,"nombre":"NIKE X JORDAN RED","precio":150,"genero":"Male","img":"../multimedia/5.png","cantidad ":1},
{"id":6,"nombre":"ADIDAS YEEZY 700","precio":350,"genero":"Male","img":"multimedia/6.png","cantidad ":1},
{"id":7,"nombre":"NIKE X JORDAN RED","precio":100,"genero":"Male","img":"multimedia/7.png","cantidad ":1},
{"id":8,"nombre":"NIKE X JORDAN","precio":75,"genero":"Female","img":"multimedia/8.png","cantidad ":1},
{"id":9,"nombre":"ADIDAS HUMAN RACE BLACK","precio":90,"genero":"Female","img":"multimedia/9.png","cantidad ":1},
{"id":10,"nombre":"ADIDAS YEEZY WHITE","precio":250,"genero":"Genderqueer","img":"multimedia/10.png","cantidad ":1},
{"id":11,"nombre":"JORDAN 4","precio":150,"genero":"Male","img":"multimedia/11.png","cantidad ":1},
{"id":12,"nombre":"NIKE X JORDAN BLACK/BLUE","precio":75,"genero":"Male","img":"multimedia/12.png","cantidad ":1},
{"id":13,"nombre":"ADIDAS YEEZY GREY","precio":250,"genero":"Male","img":"multimedia/13.png","cantidad ":1},
{"id":14,"nombre":"ADIDAS HUMAN RACE YELLOW","precio":150,"genero":"Male","img":"multimedia/14.png","cantidad ":1},
{"id":15,"nombre":"VANS ORIGINAL","precio":65,"genero":"Female","img":"multimedia/15.png","cantidad ":1},
{"id":16,"nombre":"ADIDAS ULTRA BOOST","precio":65,"genero":"Female","img":"multimedia/16.png","cantidad ":1},
{"id":17,"nombre":"NIKE X JORDAN BLACK/YELLOW","precio":120,"genero":"Male","img":"multimedia/17.png","cantidad ":1},
{"id":18,"nombre":"ADIDAS ULTRA BOOST","precio":65,"genero":"Female","img":"multimedia/18.png","cantidad ":1}
];

const promesa = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve(products);
    }, 2000)
})

function getProducts(){
    return promesa;
}

export {
    getProducts,
}