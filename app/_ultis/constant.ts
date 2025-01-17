export const SIDE_BAR = [
  {
    id: "bar-1",
    title: "Recipes",
    url: "",
    child: [
      {
        id: "bar-1-1",
        title: "My Feed",
        url: "/recipes/feed",
      },
      {
        id: "bar-1-2",
        title: "Persional Recipes",
        url: "/recipes/personal",
      },
      {
        id: "bar-1-3",
        title: "Guided Recipes",
        url: "/guided/recipes",
      },
    ],
  },
  {
    id: "bar-2",
    title: "Shopping",
    url: "",
    child: [
      {
        id: "bar-2-1",
        title: "Ingredients",
        url: "/shopping",
      },
      {
        id: "bar-2-2",
        title: "Merchandise",
        url: "/shopping",
      },
    ],
  },
  {
    id: "bar-3",
    title: "Cart",
    url: "/cart",
    child: [],
  },
  {
    id: "bar-4",
    title: "Management",
    url: "",
    child: [
      {
        id: "bar-4-1",
        title: "Dashboard",
        url: "admin/dashboard",
      },
      {
        id: "bar-4-2",
        title: "Recipes",
        url: "admin/recipes",
      },
      {
        id: "bar-4-3",
        title: "User",
        url: "admin/user",
      },
    ],
  },
  {
    id: "bar-5",
    title: "Logout",
    url: "",
    function: ()=>{},
    child: [],
  },
];

export const queryKey = {
  AUTH: {
    LOGIN: "LOGIN",
  },
  RECIPES: {
    GET_LIST: "GET_LIST",
  },
};

export const ROUTES = {
  USER: {
    url: "/user",
    name: "user",
  },
  USER_PROFILE: {
    url: "/profile",
    name: "user-profile",
  },
  RECIPES_FEED: {
    url: "/recipes/feed",
    name: "recipes-feed",
  },
  RECIPES_DETAIL: {
    url: "/recipes/detail",
    name: "recipes-detail",
  },
  RECIPES_PERSIONAL: {
    url: "/recipes/personal",
    name: "recipes-persional",
  },
  LOGIN: {
    url: "/login",
    name: "login",
  },
  REGISTER: {
    url: "/register",
    name: "register",
  },
};
