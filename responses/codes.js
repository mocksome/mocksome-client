// module.exports = (code) => {
//   return (resp) => {
//     return {
//       ...resp,
//       statusCode: code
//     }
//   }
// }

module.exports = {
  ok: (resp) => {
    return {
      ...resp,
      statusCode: 200
    };
  }
}