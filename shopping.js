{/* <li class="meal">
          <img src="./hamberger.jpg" alt="餐點 3" style="width: 400px;height: 300px;">
          <h3>漢堡</h3>
          <h3>價格: $80</h3>
          <input type="number" min="0" value="0">
          <button class="add-to-cart">加入購物車</button>
        </li> */}

let shopping = [
  {
    id: 1,
    img: './franch-fries.jpg',
    food: '薯條',
    price: 50,

  },
  {
    id: 2,
    img: './coke.jpg',
    food: '可樂',
    price: 30,

  },
  {
    id: 3,
    img: './hamberger.jpg',
    food: '漢堡',
    price: 80,

  },

]




function finshed () {
  console.log(111)
  total = ''

  shopping.forEach(ele => {
    total += ` <li class="meal">
        <img src="${ele.img}">
        <h3>${ele.food}</h3>
        <h3>價格:${ele.price}</h3>
        <input type="number" min="0" value="0">
        <button class="add-to-cart">加入購物車</button>
        </li>`
  })
  $('#meal-list').html(total)
}

finshed()


function clickbutton () {
  $('.pay').click(function () {
    $('.window').css('display', 'block')
  })
}
clickbutton()






