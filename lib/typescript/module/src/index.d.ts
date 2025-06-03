/**
 * TikTok event names as defined by the TikTok Business SDK.
 */
export declare enum TikTokEventName {
    ACHIEVE_LEVEL = "ACHIEVE_LEVEL",
    ADD_PAYMENT_INFO = "ADD_PAYMENT_INFO",
    COMPLETE_TUTORIAL = "COMPLETE_TUTORIAL",
    CREATE_GROUP = "CREATE_GROUP",
    CREATE_ROLE = "CREATE_ROLE",
    GENERATE_LEAD = "GENERATE_LEAD",
    IN_APP_AD_CLICK = "IN_APP_AD_CLICK",
    IN_APP_AD_IMPR = "IN_APP_AD_IMPR",
    INSTALL_APP = "INSTALL_APP",
    JOIN_GROUP = "JOIN_GROUP",
    LAUNCH_APP = "LAUNCH_APP",
    LOAN_APPLICATION = "LOAN_APPLICATION",
    LOAN_APPROVAL = "LOAN_APPROVAL",
    LOAN_DISBURSAL = "LOAN_DISBURSAL",
    LOGIN = "LOGIN",
    RATE = "RATE",
    REGISTRATION = "REGISTRATION",
    SEARCH = "SEARCH",
    SPEND_CREDITS = "SPEND_CREDITS",
    START_TRIAL = "START_TRIAL",
    SUBSCRIBE = "SUBSCRIBE",
    UNLOCK_ACHIEVEMENT = "UNLOCK_ACHIEVEMENT"
}
export declare enum TikTokContentEventName {
    ADD_TO_CART = "ADD_TO_CART",
    ADD_TO_WISHLIST = "ADD_TO_WISHLIST",
    CHECK_OUT = "CHECK_OUT",
    PURCHASE = "PURCHASE",
    VIEW_CONTENT = "VIEW_CONTENT"
}
/**
 * Standard event parameters.
 */
export declare enum TikTokContentEventParameter {
    CONTENT_TYPE = "CONTENT_TYPE",
    CONTENT_ID = "CONTENT_ID",
    DESCRIPTION = "DESCRIPTION",
    CURRENCY = "CURRENCY",
    VALUE = "VALUE",
    CONTENTS = "CONTENTS",
    ORDER_ID = "ORDER_ID"
}
/**
 * Content parameters for events with detailed content information.
 */
export declare enum TikTokContentEventContentsParameter {
    CONTENT_ID = "CONTENT_ID",// Unique product or content ID.
    CONTENT_CATEGORY = "CONTENT_CATEGORY",// Product or page category.
    BRAND = "BRAND",// Brand name.
    PRICE = "PRICE",// Price of the item.
    QUANTITY = "QUANTITY",// Number of items.
    CONTENT_NAME = "CONTENT_NAME"
}
type EventProps = {
    contents?: {
        price: number;
        quantity: number;
        content_type: string;
        content_id: string;
        brand: string;
        content_name: string;
    };
    currency: string;
    value: number;
    description: string;
    query: string;
};
/**
 * Initializes the TikTok SDK.
 * @param appId - Your app ID (e.g., Android package name or iOS listing ID)
 * @param ttAppId - Your TikTok App ID from TikTok Events Manager
 * @param debug - Whether to enable debug mode
 * @returns A promise that resolves when the SDK is initialized.
 */
export declare const initializeSdk: (appId: string, ttAppId: string, debug?: Boolean) => Promise<string>;
/**
 * Identifies the user.
 */
export declare const identify: (externalId: string, externalUserName: string, phoneNumber: string, email: string) => Promise<string>;
/**
 * Logs out the user.
 */
export declare const logout: () => Promise<string>;
/**
 * Reports a standard event.
 * Accepts an optional eventId and additional properties.
 */
export declare const trackEvent: (eventName: TikTokEventName, eventId?: string, properties?: Partial<EventProps>) => Promise<string>;
/**
 * Reports a content event.
 * Accepts the event type (e.g., "ADD_TO_CART", "CHECK_OUT") and additional properties.
 */
export declare const trackContentEvent: (eventName: TikTokContentEventName, properties?: Partial<Record<TikTokContentEventParameter, string | number | boolean | Array<Partial<Record<TikTokContentEventContentsParameter, string | number | boolean>>>>>) => Promise<string>;
/**
 * Reports a custom event.
 * Builds the event using TTBaseEvent and adds provided properties.
 */
export declare const trackCustomEvent: (eventName: string, properties?: Partial<EventProps>) => Promise<string>;
export declare const TikTokBusiness: {
    initializeSdk: (appId: string, ttAppId: string, debug?: Boolean) => Promise<string>;
    identify: (externalId: string, externalUserName: string, phoneNumber: string, email: string) => Promise<string>;
    logout: () => Promise<string>;
    trackEvent: (eventName: TikTokEventName, eventId?: string, properties?: Partial<EventProps>) => Promise<string>;
    trackContentEvent: (eventName: TikTokContentEventName, properties?: Partial<Record<TikTokContentEventParameter, string | number | boolean | Array<Partial<Record<TikTokContentEventContentsParameter, string | number | boolean>>>>>) => Promise<string>;
    trackCustomEvent: (eventName: string, properties?: Partial<EventProps>) => Promise<string>;
};
export default TikTokBusiness;
//# sourceMappingURL=index.d.ts.map