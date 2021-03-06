export const allRoutes = {
  home: '',
  meet: 'about',
  media: 'media',
  comedy: 'comedy',
  tour: 'tour',
  press: 'press',
  book: 'book',
  links: 'links',
  youtube: 'https://www.youtube.com/channel/UClgywpOftm8vFXCC8yzMfpw',
  facebook: 'https://www.facebook.com/PamelaRaeSchuller/',
  twitter: 'https://twitter.com/PamelaComedy',
  instagram: 'https://www.instagram.com/pamelacomedy/',
}

const routeFactory = (name, path, opts = {}) => ({ name, path, ...opts })

export const menuRoutes = [
  routeFactory('Meet Pam', allRoutes.meet),
  routeFactory('Media', allRoutes.media),
  routeFactory('Comedy', allRoutes.comedy),
  routeFactory('Tour', allRoutes.tour),
  routeFactory('Press', allRoutes.press),
]

export const bookRoute = routeFactory('Book Now', allRoutes.book)

export const socialRoutes = [
  routeFactory('Youtube', allRoutes.youtube),
  routeFactory('Facebook', allRoutes.facebook),
  routeFactory('Twitter', allRoutes.twitter),
  routeFactory('Instagram', allRoutes.instagram),
]
