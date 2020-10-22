/* 
    模块化，防止全局污染，在每一个立即执行函数内部可以有同名变量而不会相互影响
*/
(function(w) {
	let msg = '我是module1中的msg';

	function foo() {
		console.log('foo-----');
	}

	function getMsg() {
		console.log(msg);
    }
    
    w.module1 = {
        foo,
        getMsg
      }
})(window);
