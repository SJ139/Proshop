"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var orderSchema = _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderItems: [{
    name: {
      type: String,
      required: true
    },
    qty: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    product: {
      type: _mongoose["default"].Schema.Types.ObjectID,
      required: true,
      ref: 'Product'
    }
  }],
  shippingAddress: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    id: {
      type: String
    },
    status: {
      type: String
    },
    update_time: {
      type: String
    },
    email_address: {
      type: String
    }
  },
  taxPrice: {
    type: Number,
    required: true,
    "default": 0.0
  },
  shippingPrice: {
    type: Number,
    required: true,
    "default": 0.0
  },
  totalPrice: {
    type: Number,
    required: true,
    "default": 0.0
  },
  isPaid: {
    type: Boolean,
    required: true,
    "default": false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    required: true,
    "default": false
  },
  deliveredAt: {
    type: Date
  }
}, {
  timestamps: true
});

var Order = _mongoose["default"].model('Order', orderSchema);

var _default = Order;
exports["default"] = _default;