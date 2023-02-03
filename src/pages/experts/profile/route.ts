import { ROUTE_NAMES } from "@/constants/route-name";
import { RouteRecordRaw } from "vue-router";

export default {
  path: "/expert/profile",
  component: () => import(/* webpackChunkName: "experts" */ "./page.vue"),
  name: ROUTE_NAMES.EXPERTS_PROFILE,
} satisfies RouteRecordRaw;
