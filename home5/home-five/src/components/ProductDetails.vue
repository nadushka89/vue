<template>
    <div>
       <p>Выберите валюту:</p>
       <select name="currency" id="" v-model="currency" class="currency">
            <option>₽</option>
            <option>$</option>
        </select>
        <div v-for="product in products" :key="product.id" class="product">
            <p class="name_product">Название: {{ product.name }}</p>
            <p>Цена: {{ formatPrice(product.price) }}</p>
            <p v-if="product.available">Статус: Available</p>
            <p v-else>Статус: Out of stock</p>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            price: '',
            currency: '',
            products: [
                {
                    id: 0,
                    name: 'Платье синее',
                    price: 4500,
                    available: true
                },
                {
                    id: 1,
                    name: 'Платье красное',
                    price: 5500,
                    available: true
                },
                {
                    id: 2,
                    name: 'Джинсы джоггер',
                    price: 6700,
                    available: false
                },
                {
                    id: 3,
                    name: 'Юбка макси',
                    price: 5600,
                    available: true
                },
                {
                    id: 4,
                    name: 'Юбка мини',
                    price: 4800,
                    available: true
                },
                {
                    id: 5,
                    name: 'Колготки светлые 30den',
                    price: 700,
                    available: false
                },

            ]
            
        };
    },

    computed: {
        formatPrice() {
            if (this.currency === '$'){
                return price => `$ ${(price / 91.33).toFixed(2)}`
                
            } else {
                return price => `₽ ${price}`;
            }
        }
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.currency{
    width: 70px;
}
.product{
    margin-bottom: 50px;
}
.name_product{
    font-style: italic;
}
</style>