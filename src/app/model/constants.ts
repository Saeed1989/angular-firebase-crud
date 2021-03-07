/** type of the view that will be shown in the app */
export enum ViewType {
  YOUTUBE = 'ইউ টিউব',
  WEB = 'ওয়েব',
  APP = 'এপ',
  FACEBOOK = 'ফেসবুক',
}

/** session item names */
export enum SessionItems {
  YOUSER_ATTRIBUTE = 'user_atttribute',
}

export const TEST_USER_CREDENTIALS = {
  email: "test@testmail.com",
  password: "testPassword"
}

/** url in firebase for the items */
export const ITEM_LIST_URL =
  'https://breakingnewsbangla-5e365.firebaseio.com/items_table.json';
