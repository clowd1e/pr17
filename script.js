function indexOf(arr, num) {
    return arr.findIndex(e => num === e)
}
console.log(indexOf([1, 2, 3], 3))
console.log(indexOf([1, 2, 3], 4))
console.log(indexOf([1, 2, 3, 4], 4))
console.log(indexOf([14, 25, 38, 423, 141], 38))