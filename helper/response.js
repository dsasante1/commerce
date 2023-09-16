 function responseProvider(res, data, message, code) {
  return res.status(code).json({ message, data });
}


module.exports=responseProvider