import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/index.vue'),
	meta:{
		title:'首页'
	},
	redirect:'/worker/list',
	children:[
		{
			path:'/worker/list/:pageNumber?',
			name:'worker/list',
			component:()=>import('../views/nanny/nanny/list.vue'),
			meta:{title:'家政人员管理',hasSubMenu:false,icon:'user'}
		},{
			path:'worker/add_name', 
			name:'worker/add_name',
			component: () => import('../views/nanny/nanny/nannyAddName.vue'),
			meta:{title:'新增家政人员',hasSubMenu:false,icon:'',left:true,isHide:true},
		},{
			path:'/worker/add',
			name:'worker/add',
			component: () => import('../views/nanny/nanny/nannyAdd.vue'),
			meta:{title:'新增家政人员',hasSubMenu:false,icon:'',left:true,isHide:true},
		},
		{
			path:'/worker/detail',
			name:'worker/detail',
			component: () => import('../views/nanny/nanny/detail.vue'),
			meta:{title:'家政人员详情',hasSubMenu:false,icon:'',left:true,isHide:true},
		}
		// {
		// 	path:'/worker',
		// 	name:'worker',
		// 	component: () => import('../views/nanny/index.vue'),
		// 	meta:{title:'家政人员管理',hasSubMenu:true,icon:'user'},
		// 	children:[
		// 		{
		// 			path:'/worker/worker',
		// 			name:'worker/worker',
		// 			component: () => import('../views/nanny/nanny/index.vue'),
		// 			meta:{title:'家政人员',hasSubMenu:true,icon:'align-left',left:true},
		// 			children:[
		// 				{
		// 					path:'/worker/worker/add_name',
		// 					name:'worker/worker/add_name',
		// 					component: () => import('../views/nanny/nanny/nannyAddName.vue'),
		// 					meta:{title:'新增家政人员',hasSubMenu:false,icon:'',left:true,isHide:true},
		// 				},
		// 				{
		// 					path:'/worker/worker/add',
		// 					name:'worker/worker/add',
		// 					component: () => import('../views/nanny/nanny/nannyAdd.vue'),
		// 					meta:{title:'新增家政人员',hasSubMenu:false,icon:'',left:true,isHide:true},
		// 				},{
		// 					path:'/worker/worker/next',
		// 					name:'worker/worker/next',
		// 					component: () => import('../views/nanny/nanny/nannyAddNext.vue'),
		// 					meta:{title:'新增家政人员',hasSubMenu:false,icon:'',left:true,isHide:true},
		// 				},
		// 				{
		// 					path:'/worker/worker/list/:pageNumber?',
		// 					name:'worker/worker/list',
		// 					component: () => import('../views/nanny/nanny/list.vue'),
		// 					meta:{title:'家政人员列表',hasSubMenu:false,icon:'',left:true},
		// 				},{
		// 					path:'/worker/worker/detail',
		// 					name:'worker/worker/detail',
		// 					component: () => import('../views/nanny/nanny/detail.vue'),
		// 					meta:{title:'家政人员详情',hasSubMenu:false,icon:'',left:true,isHide:true},
		// 				}
		// 			]
		// 		}
		// 	]
		// },
		
	]
  },
  {
  	  path:'/login',
  	  name:'login',
  	  component: () => import('../views/auth/login.vue'),
  	  meta:{title:'登录'}
  },{
	  path:'*',
	  name:'404',
	  component: () => import('../views/404/404.vue'),
	  meta:{title:'404'}
  }
]

//解决相同路由情况下跳转报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
