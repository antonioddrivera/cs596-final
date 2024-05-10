import { lazy } from "react";

const Home = lazy(() => import("./components/home"));
const Users = lazy(() => import("./components/users"));
const UserProfile = lazy(() => import("./components/userProfile"));
const SearchUser = lazy(() => import("./components/searchUser"));
const Login = lazy(() => import("./components/login"));
const AuthProfile = lazy(() => import("./components/authProfile"));
const AboutUs = lazy(() => import("./components/about"));
const RepoDetail = lazy(() => import("./components/repoDetail"));
const Dappcord = lazy(() => import("./components/Dappcord"));
const Payment = lazy(() => import("./components/Payment")); 
const NotFound = lazy(() => import("./components/notfound"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "/users",
    component: Users,
    requiresAuth: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    requiresAuth: true,
  },
  {
    path: "/search",
    component: SearchUser,
    requiresAuth: false,
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    requiresAuth: false,
  },
  {
    path: "/about",
    component: AboutUs,
    requiresAuth: false,
  },
  {
    path: "/repo-detail/:name/:username",
    component: RepoDetail,
    requiresAuth: false,
  },
  {
    path: "/dappcord",
    component: Dappcord,
    requiresAuth: false,
  },
  {
    path: "/payment", 
    component: Payment, 
    requiresAuth: false, 
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];
