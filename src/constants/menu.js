import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "dashboard",
  icon: "iconsminds-shop",
  label: "menu.dashboard",
  to: `${adminRoot}/dashboard`,
},
{
  id: "health",
  icon: "iconsminds-apple",
  label: "menu.health",
  to: `${adminRoot}/health`,
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "menu.vip",
    to: `${adminRoot}/health/vip`,
  }, {
    icon: "simple-icon-paper-plane",
    label: "menu.patient-data",
    to: `${adminRoot}/health/data`,
  },
  ]
},
{
  id: "others",
  icon: "iconsminds-notepad",
  label: "menu.others",
  to: "/others",
  subs: [{
    icon: "simple-icon-user-following",
    label: "menu.reserve-record",
    to: "/others/reserve"
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.complaints",
    to: "/others/complaints",
  }
  ]
},
{
  id: "sales",
  icon: "iconsminds-pen-2",
  label: "menu.sales",
  to: "/sales",
  roles: [UserRole.Sales],
  subs: [{
    icon: "simple-icon-user-following",
    label: "menu.team",
    to: "/sales/team",
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.profit",
    to: "/sales/profit",
  }, {
    icon: "simple-icon-user-following",
    label: "menu.order-record",
    to: "/user/order-record",
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.money-record",
    to: "/user/money-record",
  }, {
    icon: "simple-icon-user-following",
    label: "menu.track",
    to: "/user/track",
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.report",
    to: "/user/report",
  }
  ]
},
];
export default data;
