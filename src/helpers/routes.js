export const allRoutes = {
  home: '/',
  meet: '/meet',
  media: '/media',
  comedy: '/comedy',
  tour: '/tour',
  press: '/press',
  book: '/book',
}

const routeFactory = (name, path, opts = {}) => ({ name, path, ...opts })

export const menuRoutes = [
  routeFactory('Meet Pam', allRoutes.meet),
  routeFactory('Media', allRoutes.media),
  routeFactory('Comedy', allRoutes.comedy),
  routeFactory('Tour', allRoutes.tour),
  routeFactory('Press', allRoutes.press),
  routeFactory('Book Now', allRoutes.book),
]
