function getProductId(url){
    let urlArray = url.split("-")
    return urlArray[urlArray.length - 2 ]
  }

module.exports  = getProductId