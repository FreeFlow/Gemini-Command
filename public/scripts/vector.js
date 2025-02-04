(function() {
  var Vector;
  Vector = (function() {
    function Vector(x, y) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
      return this;
    }
    Vector.prototype.add = function(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    };
    Vector.prototype.multiply_scalar = function(value) {
      this.x *= value;
      this.y *= value;
      return this;
    };
    Vector.prototype.rotate = function(radians) {
      var _x, _y;
      _x = this.x * Math.cos(radians) - this.y * Math.sin(radians);
      _y = this.x * Math.sin(radians) + this.y * Math.cos(radians);
      this.x = _x;
      this.y = _y;
      return this;
    };
    Vector.prototype.restrict = function(cap) {
      if (this.x > cap) {
        this.x = cap;
      } else if (this.x < -cap) {
        this.x = -cap;
      }
      if (this.y > cap) {
        this.y = cap;
      } else if (this.y < -cap) {
        this.y = -cap;
      }
      return this;
    };
    Vector.prototype.squared_distance = function(vector) {
      return Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2);
    };
    Vector.prototype.toJSON = function() {
      return {
        x: this.x,
        y: this.y
      };
    };
    return Vector;
  })();
  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = Vector;
  } else {
    window.Vector = Vector;
  }
}).call(this);
