import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "main",
  icon: "iconsminds-shop",
  label: "menu.dashboard",
  to: `${adminRoot}/piaf/start`,
},
{
  id: "second-menu",
  icon: "iconsminds-chemical",
  label: "menu.health",
  to: `${adminRoot}/second-menu`,
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "menu.vip",
    to: `${adminRoot}/second-menu/second`,
  }, {
    icon: "simple-icon-paper-plane",
    label: "menu.patient-data",
    to: `${adminRoot}/second-menu/second`,
  },
  ]
},
//keep this(others) for test
{
  id: "others",
  icon: "iconsminds-digital-drawing",
  label: "menu.others",
  to: "/user/login",
  // roles: [UserRole.Editor],
  subs: [{
    icon: "simple-icon-user-following",
    label: "menu.login",
    to: "/user/login",
    newWindow: true
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.register",
    to: "/user/register",
    newWindow: true
  }, {
    icon: "simple-icon-user-unfollow",
    label: "menu.forgot-password",
    to: "/user/forgot-password",
    newWindow: true
  },
  {
    icon: "simple-icon-user-following",
    label: "menu.reset-password",
    to: "/user/reset-password",
    newWindow: true
  }
  ]
},
{
  id: "pages",
  icon: "iconsminds-digital-drawing",
  label: "menu.others",
  to: "/user/login",
  subs: [{
    icon: "simple-icon-user-following",
    label: "menu.reserve-record",
    to: "/user/login",
    newWindow: true
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.complaints",
    to: "/user/register",
    newWindow: true
  }
  ]
},
{
  id: "sales",
  icon: "iconsminds-digital-drawing",
  label: "menu.sales",
  to: "/user/login",
  subs: [{
    icon: "simple-icon-user-following",
    label: "menu.team",
    to: "/user/login",
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.profit",
    to: "/user/register",
    newWindow: true
  }, {
    icon: "simple-icon-user-following",
    label: "menu.order-record",
    to: "/user/login",
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.money-record",
    to: "/user/register",
    newWindow: true
  }, {
    icon: "simple-icon-user-following",
    label: "menu.track",
    to: "/user/login",
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.report",
    to: "/user/register",
    newWindow: true
  }
  ]
},
{
  id: "single",
  icon: "iconsminds-three-arrow-fork",
  label: "menu.single",
  to: `${adminRoot}/single`,
},
{
  id: "docs",
  icon: "iconsminds-library",
  label: "menu.docs",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}
];
export default data;
