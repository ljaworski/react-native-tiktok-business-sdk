"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackEvent = exports.trackCustomEvent = exports.trackContentEvent = exports.logout = exports.initializeSdk = exports.identify = exports.default = exports.TikTokEventName = exports.TikTokContentEventParameter = exports.TikTokContentEventName = exports.TikTokContentEventContentsParameter = exports.TikTokBusiness = void 0;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-tiktok-business' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const TikTokBusinessModule = _reactNative.NativeModules.TikTokBusinessModule ? _reactNative.NativeModules.TikTokBusinessModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});

/**
 * TikTok event names as defined by the TikTok Business SDK.
 */
let TikTokEventName = exports.TikTokEventName = /*#__PURE__*/function (TikTokEventName) {
  TikTokEventName["ACHIEVE_LEVEL"] = "ACHIEVE_LEVEL";
  TikTokEventName["ADD_PAYMENT_INFO"] = "ADD_PAYMENT_INFO";
  TikTokEventName["COMPLETE_TUTORIAL"] = "COMPLETE_TUTORIAL";
  TikTokEventName["CREATE_GROUP"] = "CREATE_GROUP";
  TikTokEventName["CREATE_ROLE"] = "CREATE_ROLE";
  TikTokEventName["GENERATE_LEAD"] = "GENERATE_LEAD";
  TikTokEventName["IN_APP_AD_CLICK"] = "IN_APP_AD_CLICK";
  TikTokEventName["IN_APP_AD_IMPR"] = "IN_APP_AD_IMPR";
  TikTokEventName["INSTALL_APP"] = "INSTALL_APP";
  TikTokEventName["JOIN_GROUP"] = "JOIN_GROUP";
  TikTokEventName["LAUNCH_APP"] = "LAUNCH_APP";
  TikTokEventName["LOAN_APPLICATION"] = "LOAN_APPLICATION";
  TikTokEventName["LOAN_APPROVAL"] = "LOAN_APPROVAL";
  TikTokEventName["LOAN_DISBURSAL"] = "LOAN_DISBURSAL";
  TikTokEventName["LOGIN"] = "LOGIN";
  TikTokEventName["RATE"] = "RATE";
  TikTokEventName["REGISTRATION"] = "REGISTRATION";
  TikTokEventName["SEARCH"] = "SEARCH";
  TikTokEventName["SPEND_CREDITS"] = "SPEND_CREDITS";
  TikTokEventName["START_TRIAL"] = "START_TRIAL";
  TikTokEventName["SUBSCRIBE"] = "SUBSCRIBE";
  TikTokEventName["UNLOCK_ACHIEVEMENT"] = "UNLOCK_ACHIEVEMENT";
  return TikTokEventName;
}({}); // Events that allow additional parameters:
let TikTokContentEventName = exports.TikTokContentEventName = /*#__PURE__*/function (TikTokContentEventName) {
  TikTokContentEventName["ADD_TO_CART"] = "ADD_TO_CART";
  TikTokContentEventName["ADD_TO_WISHLIST"] = "ADD_TO_WISHLIST";
  TikTokContentEventName["CHECK_OUT"] = "CHECK_OUT";
  TikTokContentEventName["PURCHASE"] = "PURCHASE";
  TikTokContentEventName["VIEW_CONTENT"] = "VIEW_CONTENT";
  return TikTokContentEventName;
}({});
/**
 * Standard event parameters.
 */
let TikTokContentEventParameter = exports.TikTokContentEventParameter = /*#__PURE__*/function (TikTokContentEventParameter) {
  TikTokContentEventParameter["CONTENT_TYPE"] = "CONTENT_TYPE";
  TikTokContentEventParameter["CONTENT_ID"] = "CONTENT_ID";
  TikTokContentEventParameter["DESCRIPTION"] = "DESCRIPTION";
  TikTokContentEventParameter["CURRENCY"] = "CURRENCY";
  TikTokContentEventParameter["VALUE"] = "VALUE";
  TikTokContentEventParameter["CONTENTS"] = "CONTENTS";
  TikTokContentEventParameter["ORDER_ID"] = "ORDER_ID";
  return TikTokContentEventParameter;
}({});
/**
 * Content parameters for events with detailed content information.
 */
let TikTokContentEventContentsParameter = exports.TikTokContentEventContentsParameter = /*#__PURE__*/function (TikTokContentEventContentsParameter) {
  TikTokContentEventContentsParameter["CONTENT_ID"] = "CONTENT_ID";
  // Unique product or content ID.
  TikTokContentEventContentsParameter["CONTENT_CATEGORY"] = "CONTENT_CATEGORY";
  // Product or page category.
  TikTokContentEventContentsParameter["BRAND"] = "BRAND";
  // Brand name.
  TikTokContentEventContentsParameter["PRICE"] = "PRICE";
  // Price of the item.
  TikTokContentEventContentsParameter["QUANTITY"] = "QUANTITY";
  // Number of items.
  TikTokContentEventContentsParameter["CONTENT_NAME"] = "CONTENT_NAME"; // Name of the product or page.
  return TikTokContentEventContentsParameter;
}({});
/**
 * Initializes the TikTok SDK.
 * @param appId - Your app ID (e.g., Android package name or iOS listing ID)
 * @param ttAppId - Your TikTok App ID from TikTok Events Manager
 * @param debug - Whether to enable debug mode
 * @returns A promise that resolves when the SDK is initialized.
 */
const initializeSdk = async (appId, ttAppId, debug) => await TikTokBusinessModule.initializeSdk(appId, ttAppId, debug || false);

/**
 * Identifies the user.
 */
exports.initializeSdk = initializeSdk;
const identify = async (externalId, externalUserName, phoneNumber, email) => await TikTokBusinessModule.identify(externalId, externalUserName, phoneNumber, email);

/**
 * Logs out the user.
 */
exports.identify = identify;
const logout = async () => await TikTokBusinessModule.logout();

/**
 * Reports a standard event.
 * Accepts an optional eventId and additional properties.
 */
exports.logout = logout;
const trackEvent = async (eventName, eventId, properties) => await TikTokBusinessModule.trackEvent(eventName, eventId || null, properties || null);

/**
 * Reports a content event.
 * Accepts the event type (e.g., "ADD_TO_CART", "CHECK_OUT") and additional properties.
 */
exports.trackEvent = trackEvent;
const trackContentEvent = async (eventName, properties) => await TikTokBusinessModule.trackContentEvent(eventName, properties);

/**
 * Reports a custom event.
 * Builds the event using TTBaseEvent and adds provided properties.
 */
exports.trackContentEvent = trackContentEvent;
const trackCustomEvent = async (eventName, properties) => await TikTokBusinessModule.trackCustomEvent(eventName, properties);
exports.trackCustomEvent = trackCustomEvent;
const TikTokBusiness = exports.TikTokBusiness = {
  initializeSdk,
  identify,
  logout,
  trackEvent,
  trackContentEvent,
  trackCustomEvent
};
var _default = exports.default = TikTokBusiness;
//# sourceMappingURL=index.js.map