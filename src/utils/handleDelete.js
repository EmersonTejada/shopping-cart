const handleDelete = (id, setCart, array = []) => {
    const newCart = array.filter((product) => product.id !== id)
    setCart(newCart)
  }

  export default handleDelete;