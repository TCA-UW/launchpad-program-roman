function calculator(a, b, operation) {
    
    if (operation === 'add') {
        console.log(a + b);
    }

    if (operation === 'subtract') {
        console.log(a - b);
    }

    if (operation === 'divide') {
        console.log(a / b);
    }

    if (operation === 'multiply') {
        console.log(a * b);
    }

    else {
        return 'Invalid operation';``
    }
}

// Example usage:
calculator(10, 5, 'add');        // Output: 15
calculator(10, 5, 'subtract');   // Output: 5  
calculator(10, 5, 'divide');     // Output: 2
calculator(10, 5, 'multiply');   // Output: 50

calculator(10, 5, 'fjwejfaji');   // Output: Invalid operation