
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
            <input class="count" type="number" min="0" value="${ele.count}">
            <button class="add-to-cart" disabled="${ele.count == 0}">加入購物車</button>
          </li>`
  })

  $('#meal-list').html(total)
}

page()


$('.pay').click(function () {
  $('.window').css('display', 'flex').css('flex-direction', 'row').css('justify-content', 'flex-start').css('align-items', 'flex-start')
})



$('#meal-list').on('click', '.add-to-cart', function () {
  let id = $(this).parent('.meal').data('uname')
  let food = $(this).parent('.meal').find('.food').text()
  let price = $(this).parent('.meal').find('.price').text().slice(4)
  let count = $(this).parent('.meal').find('input').val()

  pushShoppingCart(id, food, price, count)
  renderCart()
  finallyPrice()
})



$('#meal-list').on('change', '.count', function () {
  let count = $(this).val()
  let btn = $(this).parent('.meal').find('.add-to-cart')

  if (count > 0) {
    btn.prop('disabled', false)
  } else {
    btn.prop('disabled', true)
  }
})



function renderCart () {
  let total = ''


  empty.forEach((item) => {
    let totalPrice = item.price * item.count // 計算價格乘以數量的結果

    total += `<li>
                <h3>商品:${item.food}</h3>
                <h3>價格:${item.price}</h3>
                <h3>數量:${item.count}</h3>
                <h3>總價:${totalPrice}</h3> 
                </li>`

  })


  $('.window').html(total)





}


// empty為空值push(id, food, price, count)進去
function pushShoppingCart (id, food, price, count) {
  if (empty.length == 0) {
    empty.push({
      id,
      food,
      price,
      count
    })
  }

  // findIndex沒有找到返回-1
  let hasGood = empty.findIndex(e => e.id == id)
  if (hasGood >= 0) {
    console.log(hasGood)
    empty[hasGood].count = Number(empty[hasGood].count) + Number(count)
  } else {
    empty.push({
      id,
      food,
      price,
      count
    })
  }
}

// 總價
function finallyPrice () {

  let totalfinally = 0


  empty.forEach((item) => {
    let total = item.count * item.price
    totalfinally += Number(total)
  })


  $('.total-price').text(`總價: ${totalfinally}`)


}









