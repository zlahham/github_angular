app.factory('calculatorFactory', function() {
  return {
    add: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    },
    divide: function(x, y) {
      return x / y;
    },
    multiply: function(x, y) {
      return x * y;
    }
  };
});

app.service('calculator', function() {
  this.add = function(x, y) {
    return x + y;
  };

  this.subtract = function(x, y) {
    return x - y;
  };

  this.divide = function(x, y) {
    return x / y;
  };

  this.multiply = function(x, y) {
    return x * y;
  };
});
