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
    ],
    menuCategories:[
      {
        immagine: './assets/img/appetizers-menu-background.jpg',
        text: 'appetizer'
      },
      {
        immagine: './assets/img/burgers-menu-background.jpg',
        text: 'burgers'
      },
      {
        immagine: './assets/img/pizza-menu-background.jpg',
        text: 'pizzas'
      },
      {
        immagine: './assets/img/fries-menu-background.jpg',
        text: 'fries'
      },
      {
        immagine: './assets/img/sides-menu-background.jpg',
        text: 'fries'
      },
      {
        immagine: './assets/img/desserts-menu-background.jpg',
        text: 'desserts'
      },
      {
        immagine: './assets/img/beverages-menu-background.jpg',
        text: 'beverages'
      },
      {
        immagine: './assets/img/specials-menu-background.jpg',
        text: 'specials'
      },
    ],
    allergeni:[
      {
        immagine: './assets/img/vegetarian.jpg',
        text: 'vegetarian'
      },
      {
        immagine: './assets/img/gluten-free.jpg',
        text: 'gluten free'
      },
      {
        immagine: './assets/img/dairy-free.jpg',
        text: 'dairy free'
      },
      {
        immagine: './assets/img/keto-friendly.jpg',
        text: 'keto friendly'
      },
    ]
  },
  methods:{

  },
})