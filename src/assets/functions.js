const queryDB = async (path) => {
    const response = await fetch(path)
    const products = await response.json()
    return products
}

export {queryDB}