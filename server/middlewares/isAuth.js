const jwt = require('jsonwebtoken')

exports.isAuth = (req, res, next) => {
  let token = ''

  const cookies = req.headers.cookie
  if (!cookies) {
    return res.status(403).json({ msg: '403 Access denied. Cookie missing.' })
  }
  token = cookies.split('=')[1]
  if (token !== '') {
    const decodedToken = jwt.decode(token)
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      return res.status(403).json({ msg: '403 Access denied. Token expired. ' })
    }
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET)
      req.id = payload.id
      console.log(req.id)
      next()
    } catch (err) {
      console.log(err.message)
      return res.status(403).json({ msg: '403 Access denied.' })
    }
  } else {
    return res.status(404).json({ msg: '401 Not authenticated.' })
  }
}
