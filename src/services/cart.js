export const isBrowser = () => typeof window !== "undefined"

export const getCart = () =>
  isBrowser() && window.localStorage.getItem("jamCart")
    ? JSON.parse(window.localStorage.getItem("jamCart"))
    : {}

const setCart = cart =>
  window.localStorage.setItem("jamCart", JSON.stringify(cart))

export const addToCart = item => {
  const cart = getCart()
  if (cart.items) {
    let obj = cart.items.find(o => o.name === item.name)
    if (obj) {
      const quantity = obj.quantity + 1
      cart.items.find((o, i) => {
        if (o.name === item.name) {
          cart.items[i] = { name: item.name, quantity: quantity, price: obj.price * quantity }
          return true
        }
      })
    } else {
      obj = { name: item.name, quantity: 1, price: item.price }
      cart.items.push(obj)
    }
    return setCart(cart)
  } else {
    return setCart({
      items: [{ name: item.name, quantity: 1, price: item.price }],
    })
  }
}

export const cartCount = () => {
  const cart = getCart()
  if (!cart.items) return 0
  return cart.items.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
}

export const getCartItems = () => {
  const cart = getCart()
  return cart.items || {}
}
