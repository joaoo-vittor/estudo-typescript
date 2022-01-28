let x;
if (typeof x === 'undefined') x = 20;

console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  return typeof x === 'number' ? x * x : null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  // console.log('Conta invalida!', squareOfTwoNumber * 2);
  console.log('Conta invalida!');
} else {
  console.log(squareOfTwoNumber);
}

console.log(squareOfTwoString);
