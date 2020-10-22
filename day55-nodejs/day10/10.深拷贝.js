/*
    浅拷贝
        只复制对象的一层属性
        属性：属性值复制给新的对象
        把对象的每一个属性拿出来，在新的对象上扩展，再把原来的值复制过来给到这个新的对象的属性，改变新对象属性的值，旧对象属性的值不会改变
    拷贝
        两份，展示出来的是一样的
        浅拷贝：内层中的对象还是会有联系
            属性的值如果是一个对象的话，直接把这个对象的地址复制到新的对象
            属性复制
            属性的值的复制
                如果是基本数据类型，直接复制
                如果是引用类型，复制该引用地址到新的对象，因此修改新对象该属性的值会改变旧对象该属性的值
        深拷贝：两者没有关系，不管对自己怎么改变都不会对另一个造成影响
            属性复制
            属性值复制
                如果是基本数据类型，直接复制
                如果是引用类型，创建一个新的引用放在添加到对应位置
    L
        1.创建一个对象
        2.将对象传入函数中
        3.如果是对象
            创建一个新的对象
            遍历对象属性
            把对象中对应属性的值添加到新创建的对象中
                在获取对象的属性值时递归，检测该值的类型
*/
const obj = {
    name: "xiaowang",
    age: 18,
    hobby: {
        one: "喝酒",
        two: "写代码"
    },
    score: [100, 90, 80],
    do() {
        console.log("eat")
    }
}

//检测类型
function checkType(obj){
    return Object.prototype.toString.call(obj).slice(8,-1);
}
function deepClone(obj){
    let res;
    if(checkType(obj) === "Object"){
        res = {};
    }else if(checkType(obj) === "Array"){
        res = [];
    }else {
        return obj;
    }
    for(let i in obj) {
        res[i] = deepClone(obj[i]);
    }
    return res;
}

const newObj = deepClone(obj);
console.log(newObj);
newObj.hobby.one = "抽烟";

console.log(obj);
console.log(newObj);