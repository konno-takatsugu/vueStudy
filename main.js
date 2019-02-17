Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
      <div class="product">
      <div class="product-image">
          <img :src="image">
      </div>
      <div class="product-info">
          <h1>{{ title }}</h1>
          <h2>{{ subTitle }}</h2>
          <p v-if="inStock">In Stock</p>
          <p v-else
              :class="{outOfStock: !inStock}">Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
          <ul>
              <li v-for="detail in details">{{ detail }}</li>
          </ul>
              <div v-for="(variant, index) in variants"
                  :key="variant.variantId"
                  class="color-box"
                  :style="{ backgroundColor: variant.variantColor}"
                  @mouseover="updateProduct(index)">
                  {{   }}
              </div>
          <ul>
              <li v-for="size in sizes">{{size}}</li>
          </ul>
          
          <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock}">Add to Cart</button>
          <br>
          <button v-on:click="decrementToCart">Refresh the Cart</button>

          <div class="cart">
              <p>Cart({{cart}})</p>
          </div>
      </div>  
    </div>
    `,
    data() {
      return {
        brand: 'Vue Mastery',
        product: 'Socks',
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        sizes: [24, 25, 26],
        cart: 0,
        selectedVariant: 0,
        onSale: true,
        variants: [
          {
            variantId: 2234,
            variantColor: 'green',
            variantImage: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
            variantQuality: 10
          },
          {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: 'https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0',
            variantQuality: 0
          }
        ]
      }
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
        updateProduct: function (index){
          this.selectedVariant = index
          console.log(index)
        },
    },
    computed: {
      title() {
        return this.brand +' '+ this.product
      },
      inStock() {
        return this.variants[this.selectedVariant].variantQuality
      },
      image: function(){
        return this.variants[this.selectedVariant].variantImage
      },
      subTitle() {
        if (this.onSale == true) {
          return this.brand + ' ' + this.product + ' ' + 'is on sale!'
        } else {
          return this.brand + ' ' + this.product + ' ' + 'is not on sale...'
        };
      },
      shipping() {
        if(this.premium) {
          return "free"
        }
          return 2.99
      }
      
   }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
})

