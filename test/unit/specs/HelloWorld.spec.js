import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import axios from 'axios';
import Promise from 'es6-promise';
Promise.polyfill();
describe('HelloWorld.vue', () => {
	const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    before(()=>{
    	console.log(1)
    })
    after(()=>{
    	console.log(2)
    })

    beforeEach(()=>{
    	console.log(3)
    })
    it.only('only function',()=>{
    	
    })
	 it('should render correct contents', () => {
	    expect(vm.$el.querySelector('.hello h1').textContent)
	      .to.equal('Welcome to Your Vue.js App')
	  })
	 it('is m1 add two arguments',()=>{
	 	const m1 = vm.m1
	 	expect(m1(1,2)).to.equal(3)
	 })
	 it('async m2 should return 4', ()=>{
	 	const m2 = vm.m2;
	 	m2(2,2,(data)=>{
	 		expect(data).to.equal(4);	 	
	 	})
	 	// m2().then(()=>{
	 	// 	expect()
	 	// })
	 })
	 it('接口请求',()=>{
	 	// spy   间谍函数,可以获取到对应函数的调用信息，但是不能屏蔽
	 	// stub  屏蔽原有方法 会拦截掉这个方法的作用
	 	// mock
	 	// 相当于stub屏蔽原有的请求方法，spy重新设置一个新的值
	 	const getmes = vm.getmes;
	 	let callback = sinon.stub(axios,'get'); 
	 	let axiosspy = sinon.spy(()=>{
	 		return 4;
	 	});
	 	expect(getmes(axiosspy)).to.equal(4);
	 	callback.restore();
	 })
})
