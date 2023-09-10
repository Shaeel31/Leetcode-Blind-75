var calPoints = function (operations) {
    let stack = [];
    let sum = 0;

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "C":
                stack.pop();
                break;
            case "D":
                let el = stack[stack.length - 1];
                stack.push(el * 2);
                break;
            case "+":
                let el1 = stack[stack.length - 1];
                let el2 = stack[stack.length - 2];
                stack.push(el1 + el2);
                break;
            default:
                stack.push(Number(operations[i]));
        }
    }

    while (stack.length) {
        sum += stack.pop();
    }

    return sum;
};
