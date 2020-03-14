function Dog(name){
	this.name = name;
	this.stomach = [];
}
Dog.prototype.eat = function(Cat){
	this.stomach.push(Cat);
}
module.exports = Dog;