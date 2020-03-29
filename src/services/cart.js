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
          return setCart(cart)
        }
      })
    } else {
      obj = { name: item.name, quantity: 1, price: item.price }
      cart.items.push(obj)
      return setCart(cart)
    }
    return true
  } else {
    return setCart({
      items: [{ name: item.name, quantity: 1, price: item.price }],
    })
  }
}

export const cartCount = () => {
  const cart = getCart()
  return cart.items.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
}
