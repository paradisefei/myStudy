function add(...rest) {
	return rest.reduce((p, c) => {
		return p + c;
	});
}


/*  将函数暴露出去 */

//在module.exports对象上扩展一个同名属性
// module.exports.add = add;

//直接把方法的引用赋给module.exports对象
module.exports = add;