(async function () {
  "use strict";

  async function loadItems() {
    try {
      const r = await fetch("items.json");
      if (!r.ok) {
        throw new Error(`${r.status} ${r.statusText}`);
      }
      return await r.json();
    } catch (e) {
      console.error(e);
    }
  }

  class Item {
    constructor(items, price, quantity) {
      this.items = items;
      this.price = price;
      this.quantity = quantity;
      this.itemArr = [
        {
          items: this.items,
          price: this.price,
          quantity: this.quantity,
        },
      ];
    }
  }

  class Order extends Item {
    constructor(customer, address, itemArr) {
      super(itemArr);
      //console.log(itemArr);
      this.customer = customer;
      this.address = address;
    }

    /* getTotal() {
      let total = 0;
      for (let i = 0; i < this.itemArr.length; i++) {
        this.itemArr.forEach((price) => {
          total += price[i];
        });
      }
      console.log(`total is ${total}`);
      return total;
    }*/
  }

  const item1 = new Item("ball", 5 / 10, 5);
  //const item2 = new Item("car", 50 / 100, 50);
  const order1 = new Order("john", "5 shain dr", item1);
  /* order1.getTotal();*/

  console.log(order1);
  console.log(item1);

  function populateOrder(items) {
    const orderList = $(`#orders li`);
    const itemList = $(`#orders li`);

    /*let total = 0;
    total = items.forEach((item) => {
      for (let i = 0; i < item[i].price; i++) {
        total += item.price[i];
      }
      return total;
    });*/

    items.forEach((item) => {
      const theLi = $(`<li>
      customer:
      ${item.customer}
      address:
         ${item.address}
      
      </li>`).appendTo(orderList);
    });
    items.items.forEach((item) => {
      `<li>items:${items.item}
      </li>`.appendTo(itemList);
    });
  }

  const items = await loadItems();
  populateOrder(items);
})();

//theres a lot of mistakes in here I tried to mess around for hours this was the best i could do within the time limit... i will continue to work on it