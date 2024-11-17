export const SIDE_BAR = [
    {
        id: 'bar-1',
        title: 'Recipes',
        url: '',
        child: [
            {
                id: 'bar-1-1',
                title: 'My Feed',
                url: '/'
            },
            {
                id: 'bar-1-2',
                title: 'Pro Recipes',
                url: '/'
            },
            {
                id: 'bar-1-3',
                title: 'Guided Recipes',
                url: '/'
            },
        ]
    },
    {
        id: 'bar-2',
        title: 'Articles',
        url: '/',
        child: []
    }
]

export const queryKey = {
    AUTH:{
        LOGIN: 'LOGIN'
    },
    RECIPES: {
        GET_LIST: "GET_LIST"
    }
}

export const ROUTES = {
    USER: {
      url: '/user',
      name: 'user'
    },
    USER_PROFILE:{
      url: '/profile',
      name: 'user-profile'
    },
    LOGIN:{
        url: '/login',
        name: 'login'
    },
    REGISTER:{
        url: '/register',
        name: 'register'
    }
}