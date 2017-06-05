const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
      path: '/signup',
      name: 'SignUp',
      getComponent(nextState, comMod) {
        import('containers/SignUp')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
    {
     path: '/SignIn',
     name: 'Sign In',
     getComponent(nextState, comMod) {
       import('containers/SignIn')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
   {
    path: '/store',
    name: 'Store',
    getComponent(nextState, comMod) {
      import('containers/Store')
        .then(loadModule(comMod))
        .catch(errorLoading);
    },
  },
  {
   path: '/product/:id',
   name: 'Product',
   getComponent(nextState, cb) {
     import('containers/Product')
       .then(loadModule(cb))
       .catch(errorLoading);
  },
  },
  {
  path: '/create-product',
  name: 'Create Product',
  getComponent(nextState, cb) {
    import('containers/CreateProduct')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  },
  {
  path: '/update-product/:id',
  name: 'Update Product',
  getComponent(nextState, cb) {
    import('containers/UpdateProduct')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  },
  {
  path: '/update-user/:id',
  name: 'UpdateUser',
  getComponent(nextState, cb) {
    import('containers/UpdateUser')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  },
  {
  path: '/create-category',
  name: 'Create Category',
  getComponent(nextState, cb) {
    import('containers/CreateCategory')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  },
  {
  path: '/delete-category',
  name: 'DeleteCategory',
  getComponent(nextState, cb) {
    import('containers/DeleteCategory')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  },
  {
  path: '/orders',
  name: 'Orders',
  getComponent(nextState, cb) {
    import('containers/Orders')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  },
  {
  path: '/my-orders',
  name: 'MyOrders',
  getComponent(nextState, cb) {
    import('containers/MyOrders')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  },
  {
  path: '/roster',
  name: 'CustomerRoster',
  getComponent(nextState, cb) {
    import('containers/CustomerRoster')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
  },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
