import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main'; //메인 컴포넌트 호출
import List from '@/components/board/List'; //게시판 리스트 컴포넌트 호출
import Write from '@/components/board/Write'; //게시판 리스트 컴포넌트 호출

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:'Main'
			,component:Main
		}
		,{
			path:'/board/List'
			,name:List
			,component:List
		}
        ,{
			path:'/board/write'
			,name:Write
			,component:Write
		}
		
	]
})

