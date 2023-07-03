import { createWebHistory, createRouter } from 'vue-router';
import LoginPage from './components/LoginPage';
import ProductList from './components/Products';
 const  localStorageUserName = localStorage.getItem('username');


const routes = [
	{
		path: '/',
		name: 'LoginPage',
		component: LoginPage,
	},
	{
		path: '/products',
		name: 'Product-List',
		component: ProductList,
		beforeEnter: function (to, from, next) {
			if (to.name !=='Product-List' || !localStorageUserName) {
				next('/')
			} else next();
			
		},
	},
];

 console.log('localStorage', !localStorageUserName);
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
