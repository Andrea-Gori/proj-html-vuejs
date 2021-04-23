var app = new Vue({
  el: '#root',
  data:{
    collegamenti: [
      {
        name: 'Order Online'
      },
      {
        name: 'About'
      },
      {
        name:'News'
      },
      {
        name: ' Contact Us'
      }
    ],

    popularDishes:[
      {
        name: "./assets/img/skin-on-fries.jpg",
        title: 'Skin On Fries',
        price: '$3.00 – $6.00'
      },
      {
        name: "./assets/img/choco-cookie-frappe.jpg",
        title: 'Choco Cookie Frappe',
        price: '$4.99'
      },
      {
        name: "./assets/img/donut-burger.jpg",
        title: 'The Donut Burger',
        price: '$6.99'
      },
    ]
  },
  methods:{

  },
})