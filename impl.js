var cons = function (val, child) {
	return function (test) {
		return test ? val : child;
	};
};

var nth = function (lst, index) {
	while (lst) {
		if (index-- == 0)
			return lst(true);
		lst = lst(false);
	}
	return undefined;
};

/*
	Recursion is better then iteration.
	var consitr = function (lst) {
		while (lst !== undefined) {
			yield lst(true);
			lst = lst(false);
		}
	};
*/

var consprint = function (lst) {
	var printer = function (o, lst) {
		if (lst === undefined)
			return o;
		var next = lst(false);
		return printer(o + lst(true) + (next != undefined ? " " : ""), next);
	};
	console.log(printer("(", lst) + ')');
};

var consreverse = function (lst) {
	var reverse = function (lst, item=undefined) {
		if (!lst) return item;

		var e = lst(true);
		return reverse(lst(false), cons(e, item));
	};
	return reverse(lst);
};
