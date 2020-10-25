"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFeedback = exports.addPartners = exports.partnersFailed = exports.partnersLoading = exports.fetchPartners = exports.addPromotions = exports.promotionsFailed = exports.promotionsLoading = exports.fetchPromotions = exports.commentsFailed = exports.postComment = exports.addComment = exports.addComments = exports.fetchComments = exports.addCampsites = exports.campsitesFailed = exports.campsitesLoading = exports.fetchCampsites = void 0;

var ActionTypes = _interopRequireWildcard(require("./ActionTypes"));

var _baseUrl = require("../shared/baseUrl");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fetchCampsites = function fetchCampsites() {
  return function (dispatch) {
    dispatch(campsitesLoading());
    return fetch(_baseUrl.baseUrl + 'campsites').then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
        error.response = response;
        throw error;
      }
    }, function (error) {
      var errMess = new Error(error.message);
      throw errMess;
    }).then(function (response) {
      return response.json();
    }).then(function (campsites) {
      return dispatch(addCampsites(campsites));
    })["catch"](function (error) {
      return dispatch(campsitesFailed(error.message));
    });
  };
};

exports.fetchCampsites = fetchCampsites;

var campsitesLoading = function campsitesLoading() {
  return {
    type: ActionTypes.CAMPSITES_LOADING
  };
};

exports.campsitesLoading = campsitesLoading;

var campsitesFailed = function campsitesFailed(errMess) {
  return {
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
  };
};

exports.campsitesFailed = campsitesFailed;

var addCampsites = function addCampsites(campsites) {
  return {
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
  };
};

exports.addCampsites = addCampsites;

var fetchComments = function fetchComments() {
  return function (dispatch) {
    return fetch(_baseUrl.baseUrl + 'comments').then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
        error.response = response;
        throw error;
      }
    }, function (error) {
      var errMess = new Error(error.message);
      throw errMess;
    }).then(function (response) {
      return response.json();
    }).then(function (comments) {
      return dispatch(addComments(comments));
    })["catch"](function (error) {
      return dispatch(commentsFailed(error.message));
    });
  };
};

exports.fetchComments = fetchComments;

var addComments = function addComments(comments) {
  return {
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
  };
};

exports.addComments = addComments;

var addComment = function addComment(comment) {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: comment
  };
};

exports.addComment = addComment;

var postComment = function postComment(campsiteId, rating, author, text) {
  return function (dispatch) {
    var newComment = {
      campsiteId: campsiteId,
      rating: rating,
      author: author,
      text: text
    };
    newComment.date = new Date().toISOString();
    return fetch(_baseUrl.baseUrl + 'comments', {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
        error.response = response;
        throw error;
      }
    }, function (error) {
      throw error;
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return dispatch(addComment(response));
    })["catch"](function (error) {
      console.log('post comment', error.message);
      alert('Your comment could not be posted\nError: ' + error.message);
    });
  };
};

exports.postComment = postComment;

var commentsFailed = function commentsFailed(errMess) {
  return {
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
  };
};

exports.commentsFailed = commentsFailed;

var fetchPromotions = function fetchPromotions() {
  return function (dispatch) {
    dispatch(promotionsLoading());
    return fetch(_baseUrl.baseUrl + 'promotions').then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
        error.response = response;
        throw error;
      }
    }, function (error) {
      var errMess = new Error(error.message);
      throw errMess;
    }).then(function (response) {
      return response.json();
    }).then(function (promotions) {
      return dispatch(addPromotions(promotions));
    })["catch"](function (error) {
      return dispatch(promotionsFailed(error.message));
    });
  };
};

exports.fetchPromotions = fetchPromotions;

var promotionsLoading = function promotionsLoading() {
  return {
    type: ActionTypes.PROMOTIONS_LOADING
  };
};

exports.promotionsLoading = promotionsLoading;

var promotionsFailed = function promotionsFailed(errMess) {
  return {
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
  };
};

exports.promotionsFailed = promotionsFailed;

var addPromotions = function addPromotions(promotions) {
  return {
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
  };
};

exports.addPromotions = addPromotions;

var fetchPartners = function fetchPartners() {
  return function (dispatch) {
    dispatch(partnersLoading());
    return fetch(_baseUrl.baseUrl + 'partners').then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
        error.response = response;
        throw error;
      }
    }, function (error) {
      var errMess = new Error(error.message);
      throw errMess;
    }).then(function (response) {
      return response.json();
    }).then(function (partners) {
      return dispatch(addPartners(partners));
    })["catch"](function (error) {
      return dispatch(partnersFailed(error.message));
    });
  };
};

exports.fetchPartners = fetchPartners;

var partnersLoading = function partnersLoading() {
  return {
    type: ActionTypes.PARTNERS_LOADING
  };
};

exports.partnersLoading = partnersLoading;

var partnersFailed = function partnersFailed(errMess) {
  return {
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
  };
};

exports.partnersFailed = partnersFailed;

var addPartners = function addPartners(partners) {
  return {
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
  };
};

exports.addPartners = addPartners;

var postFeedback = function postFeedback(feedback) {
  return function () {
    return fetch(_baseUrl.baseUrl + 'feedback', {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      if (response.ok) {
        return response;
      } else {
        var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
        error.response = response;
        throw error;
      }
    }, function (error) {
      throw error;
    }).then(function (response) {
      return response.json(feedback);
    }).then(function (data) {
      return alert('Thank you for your feedback' + JSON.stringify(data));
    })["catch"](function (error) {
      console.log('post feedback', error.message);
      alert('Your feedback could not be posted\nError: ' + error.message);
    });
  };
};

exports.postFeedback = postFeedback;