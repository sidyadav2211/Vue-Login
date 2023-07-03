<template>

<div>
    <h2> Product List </h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th v-if="hideAction">Action</th>
        </tr>
        <tr v-for="(product, index) in productList" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td v-if="hideAction">
                <div  class="action-button">
                    <button type="button" @click="handleAdd" >Add</button>
                    <button type="button" @click="handleEdit(product.id)">Edit</button>
                    <button  type="button" @click="handleRemove(index)">Remove</button>

                </div>
            </td>
            
        </tr>
    </table>
    <div v-if="isModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <form  @submit.prevent="submitAdd">
    <div>
        <label for="Name">Name : </label>
        <input type="text" name="Name" id="Name" v-model="name">
    </div>
    <div>
        <label for="Price">Price : </label>
        <input type="number" name="Price" id="Price" v-model="price">
    </div>
    <div class="submit-btn">
        <button type="button" @click="close">Close</button>
        <button type="submit"> Submit </button>
    </div>
</form>
  </div>

</div>
</div>
</template>

<script>
export default {
    name: "Product-List",
    data(){
        return {
            isModal: false,
            name:'',
            price:'',
            currentId:0,
            currentUser:'',
            currentPassword:'',

            productList:[
                {id:1, name:'Nike', price: 5000},
                {id:2, name:'Puma', price: 10000},
                {id:3,name:'Zara', price: 4000},


            ]
        }
        
    },
    computed:{
        hideAction(){
            if(this.currentUser ==='kailashyadav@gmail.com' && this.currentPassword ==='Password@1'){
                return true;
            }else return false;
        }
    },
    mounted(){
         this.currentUser = localStorage.getItem('username');
        this.currentPassword = localStorage.getItem('password');
    },
    methods:{
        handleAdd (){
            this.isModal = true;
            this.name ='';
            this.price = null;
            console.log("CLicking" , this.isModal)
        },
        submitAdd(){
                if(this.currentId){
                   const currentIndex =  this.productList.findIndex(val=>val.id === this.currentId)
                   
                   this.productList[currentIndex].name = this.name,
                   this.productList[currentIndex].price = this.price
                }else {
                const payload = {
                    id: Math.floor(Math.random ( ) * 100),
                    name: this.name,
                    price: this.price
                }
                    this.productList.push(payload)
                    this.name = '';
                    this.price =''
            }
                this.isModal = false;
            },
        
        close (){
            this.isModal = false;
        },
        handleEdit(id){
            this.isModal = true;
            this.currentId = id;
             const preFilledValue = this.productList.filter(val=>val.id === id)
            preFilledValue.map(val=>val)
            this.name = preFilledValue[0].name;
            this.price = preFilledValue[0].price;

                
                    
        },
        handleRemove(index){
            if(index > -1){
                this.productList.splice(index,1)
            }
        }
    }
}

</script>
<style scoped>
table, th, td {
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  margin: auto;
}

th, td {
  padding: 20px;
}
.action-button{
    display: flex;
    justify-content: space-between;
    text-align: center;
    gap: 10px;
    /* padding: 1rem; */
}
.modal {
  position: fixed; 
  z-index: 1; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 500px;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
input{
    height: 10px;

    margin: 10px;
    padding: 5px;
}
.submit-btn{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 5px
}
</style>