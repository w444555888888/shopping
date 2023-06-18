
let goods = [
  {
    id: 1,
    img: './franch-fries.jpg',
    food: '薯條',
    price: 50,
    count: 0,
  },
  {
    id: 2,
    img: './hamberger.jpg',
    food: '漢堡',
    price: 120,
    count: 0,
  },
  {
    id: 3,
    img: './coke.jpg',
    food: 'Coke',
    price: 25,
    count: 0,
  }
]


let empty = []


function page () {
  let total = ''

  goods.forEach(ele => {
    total += `<li class="meal" data-uname=${ele.id}>
  <img src=${ele.img} alt="餐點 3" style="width: 400px;height: 300px;">
  <h3 class="food">${ele.food}</h3>
  <h3 class="price">價格:$${ele.price}</h3>
  <input class="count" type="number" min="1" value="${ele.count}">
  <button class="add-to-cart">加入購物車</button>
</li>`
  })

  $('#meal-list').html(total)
}

page()



$('.pay').click(function () {
  $('.modal').addClass('plusClass')
})


$('#meal-list').on('click', '.add-to-cart', function () {
  let id = $(this).parent('.meal').data('uname')
  let food = $(this).parent('.meal').find('.food').text()
  let price = $(this).parent('.meal').find('.price').text().slice(4)
  let count = $(this).parent('.meal').find('input').val()

  console.log(empty)


  
  // id 不重複累加
  let existing = empty.find(ele => ele.id === id)

  if (existing) {
    existing.count += Number(count)
  } else {
    empty.push({
      id: id,
      food: food,
      price: price,
      count: Number(count)
    })
  }

  display()

  finallyPrice()


})






function display () {
  total = ''
  let totalPrice = 0
  empty.forEach(ele => {
    totalPrice = Number(ele.count * ele.price)
    total += `
    <div>商品名:${ele.food}</div>
    <div>單價:${ele.price}</div>
    <div>數量:${ele.count}</div>
    <div>總價:${totalPrice}</div>
    `
  })

  $('.modal').html(total)

}



// 全部結帳金額
function finallyPrice () {

  let finallycount = 0

  empty.forEach(ele => {
    let total = ele.count * ele.price
    finallycount += Number(total)
  })

  $('#total-price').html('總價:$' + finallycount)

}
