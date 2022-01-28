import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((acc, valor) => acc * valor, 1);
};

export default _;
