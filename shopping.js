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

let cart = [] //定義一個空陣列，用來儲存加入購物車的商品



function finshed () {
  console.log(111)
  total = ''

  shopping.forEach(ele => {
    total += ` <li class="meal" data-value="${ele.id}">
        <img src="${ele.img}">
        <h3 class="food">${ele.food}</h3>
        <h3 class="price">價格:${ele.price}</h3>
        <input type="number" min="1" value="1">
        <button class="add-to-cart">加入購物車</button>
        </li>`
  })
  $('#meal-list').html(total)
}

finshed()

//-----------------------------------
// 按class='pay'按鈕叫出隱藏display:block
$('.pay').click(function () {
  $('.window').css('display', 'flex', 'flex-direction: row',
    'justify-content: flex-start', 'align-items: flex-start',)
})

//-----------------------------------

// 購物車
$('#menu').on('click', '.add-to-cart', function () {
  let value = $(this).parent('.meal').data('value') //得到當前的id值 或是用attr('data-value)
  let food = $(this).parent('.meal').find('.food').text()
  let price = $(this).parent('.meal').find('.price').text()
  let count = $(this).parent('.meal').find('input').val()
  // console.log(price.split(':'))
  // console.log(price.split(''))
  // console.log(price.split(' '))
  price = price.split(':')[1] // 用:分隔開取[1]



  cart.push({ // 將以上變數包裝成物件後，再推至cart，你可以打印看看結果，這邊之後還要做判斷跟渲染
    id: value,
    food: food,
    price: price,
    count: count,
  })

  console.log(cart)

  renderCart()
})


// 渲染，將上面的cart陣列渲染至購物車的彈窗內
function renderCart() {
  let total = '';

  cart.forEach((item) => {
    let totalPrice = item.price * item.count; // 計算價格乘以數量的結果

    total += `<li>
        <h3>${item.food}</h3>
        <h3>價格: ${item.price}</h3>
        <h3>數量: ${item.count}</h3>
        <h3>總價: ${totalPrice}</h3> 
        </li>`;
  });

  $('.window').html(total);
}












