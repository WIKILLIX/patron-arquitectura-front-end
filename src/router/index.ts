import { createRouter, createWebHistory } from 'vue-router'
import { h, resolveComponent } from 'vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/admin',
		},
		{
			path: '/admin',
			name: 'Admin',
			component: () => import('../layouts/AdminLayout.vue'),
			redirect: '/admin/products',
			children: [
				{
					path: '/admin/products',
					name: 'Products',
					component: {
						render() {
							return h(resolveComponent('router-view'))
						},
					},
					redirect: '/admin/products/list',
					children: [
						{
							path: '/admin/products/list',
							name: 'productList',
							component: () => import('../modules/admin/products/views/List.vue')
						},
						{
							path: '/admin/products/create',
							name: 'productCreate',
							component: () => import('../modules/admin/products/views/Create.vue')
						},
						{
							path: '/admin/products/edit/:id',
							name: 'productEdit',
							component: () => import('../modules/admin/products/views/Edit.vue')
						}
					]
				},
				{
					path: '/admin/users',
					name: 'Users',
					component: {
						render() {
							return h(resolveComponent('router-view'))
						},
					},
					redirect: '/admin/users/list',
					children: [
						{
							path: '/admin/users/list',
							name: 'userList',
							component: () => import('../modules/admin/users/views/List.vue')
						},
						{
							path: '/admin/users/create',
							name: 'userCreate',
							component: () => import('../modules/admin/users/views/Create.vue')
						},
						{
							path: '/admin/users/edit/:id',
							name: 'userEdit',
							component: () => import('../modules/admin/users/views/Edit.vue')
						}

					]
				}

			]
		},
		{
			path: '/celulares',
			name: 'Smartphones',
			component: () => import('../layouts/BaseLayout.vue'),
			redirect: '/celulares/list',
			children: [
				{
					path: '/celulares/list',
					name: 'SmartphonesList',
					component: () => import('../modules/e-comerce/views/Ecomerce.vue')
				},
				{
					path: '/celulares/:id',
					name: 'SmartphonesDetail',
					component: () => import('../modules/e-comerce/views/DetailProduct.vue')
				}
			]

		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('../modules/auth/views/Login.vue')
		},
		{
			path: '/register',
			name: 'Register',
			component: () => import('../modules/auth/views/Register.vue')
		}
	],
	scrollBehavior() {
		return { top: 0 }
	}
})

export default router