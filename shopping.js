{/* <li class="meal">
          <img src="./hamberger.jpg" alt="餐點 3" style="width: 400px;height: 300px;">
          <h3>漢堡</h3>
          <h3>價格: $80</h3>
          <input type="number" min="0" value="0">
          <button class="add-to-cart">加入購物車</button>
        </li> */}

        let goods = [
          {
            id: 1,
            img: './franch-fries.jpg',
            food: '薯條',
            price: 50,
          },
          {
            id: 2,
            img: './hamberger.jpg',
            food: '漢堡',
            price: 120
          },
          {
            id: 3,
            img: './coke.jpg',
            food: 'Coke',
            price: 25
          }
        ]
        
        
        let empty = []
        
        
        function page () {
          let total = ''
          goods.forEach(ele => {
            total += `<li class="meal" data-uname=${ele.id}}>
            <img src=${ele.img} alt="餐點 3" style="width: 400px;height: 300px;">
            <h3 class="food">${ele.food}</h3>
            <h3 class="price">價格:$${ele.price}</h3>
            <input type="number" min="1" value="1">
            <button class="add-to-cart">加入購物車</button>
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
        
        
        
        
          console.log(empty)
        
        
          let choose = empty.find(item => item.id === id)
          if (choose) {
            // 存在choose.count+新的count
            choose.count = parseInt(choose.count) + parseInt(count)
            
          } else {
            // 如果id不一樣就push
            empty.push({
              id: id,
              food: food,
              price: price,
              count: count
            })
          }
        
          renderCart()
        
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







