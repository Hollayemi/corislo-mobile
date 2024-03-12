import { Routes } from "../../navigations/routes";

export const productManagement = [
  { id: 1, name: "Orders", type: "link", to: Routes.order },
  { id: 2, name: "Pending Reviews", type: "link", to: Routes.review },
  { id: 3, name: "Vouchers", type: "link", to: Routes.voucher },
  { id: 4, name: "Saved Items", type: "link", to: Routes.savedItems },
];
export const accountManagement = [
  {
    id: 1,
    name: "Change Phone Number",
    type: "link",
    to: Routes.changePhoneNumber,
  },
  { id: 2, name: "Change Password", type: "link", to: Routes.changePassword },
  { id: 3, name: "Change Email Address", type: "link", to: Routes.changeEmail },
  { id: 4, name: "Two - Factor Authentication", type: "toogle" },
];
export const accountManagement1 = [
  { id: 1, name: "Customer Support", type: "link", to: Routes.customerSupport },

  { id: 2, name: "Delete Account", type: "link", to: Routes.deleteAccount },
];
export const notificatiionPrefernce = [
  { id: 1, name: "Push Notifications", type: "toogle", value: true },

  { id: 2, name: "Email Notifications", type: "toogle", value: true },
];
