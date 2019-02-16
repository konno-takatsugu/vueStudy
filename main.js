//Add an array of sizes to the data and use v-for to display them in a list. 

var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    image: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
    inStock: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    sizes: [24, 25, 26],
    cart: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0'
      }
    ]
}, 
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        decrementToCart: function(){
            if (this.cart > 0) {
                this.cart -= 1
        } else {
            return this.cart
        };
        },
        updateProduct: function (variantImage){
            this.image = variantImage
        }
    },
    computed: {
      title() {
        return this.brand +' '+ this.product
      }
    }
})

