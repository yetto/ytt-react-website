// Mouse Pos Changed
export function mousePosChanged(x,y){
  return {
    type: "MOUSE_POS_CHANGED",
    payload : {
      x: x,
      y: y
    }
  }
}

// viewport X chage
export function xChanged(value){
  return {
    type : "POSX_CHANGED",
    payload : value
  }
}

// viewport Y chage
export function yChanged(value){
  return {
    type : "POSY_CHANGED",
    payload : value
  }
}

// viewport width chage
export function widthChanged(value){
  return {
    type : "POSWIDTH_CHANGED",
    payload : value
  }
}

// viewport height chage
export function heightChanged(value){
  return {
    type : "POSHEIGHT_CHANGED",
    payload : value
  }
}


