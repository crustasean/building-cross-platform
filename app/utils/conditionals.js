/*
 * If you've never used logical operators before
 * (such as `and` `or` `not` etc.)
 * then you should read:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
 *
 */

/*
 * export a function named `both` which tests whether both of two variables is truthy.
 */
export function both(a,b){
  let test = a&&b
  return test
}
/*
 * export a function named `either` which tests whether either of two variables is truthy.
 */
export function either(c,d){
  let test = c || d
  return test
}
/*
 * export a function named `negative` which tests whether a variable is `false`.
 */
export function negative(e) {
  return e == false
}

/*
 * export a function named `positive` which tests whether a variable is `true`.
 */
export function positive(f) {
  return f == true
}
/*
 * export a function named `all` which tests whether all of three variables are truthy.
 */
export function all(x,y,z) {
  return x == true && y == true && z == true
}
/*
 * export a function named `none` which tests whether all of three variables is falsey
 */
export function none(u,v,w){
  return u == false && v == false && w == false
}
/*
 * export a function named `any` which tests whether any of three variables is truthy
 */
export function any(r,s,t){
  return r == true || s == true || t == true
}
/*
 * export a function named `isTrue` that returns whether a variable is `true`
 */
export function isTrue(l){
  return l == true
}
/*
 * export a function named `isTruthy` that returns whether a variable is `truthy`
 */
export function isTruthy(k){
  return k == true
}
