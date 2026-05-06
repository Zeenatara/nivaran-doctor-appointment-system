import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {
  try {

    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ success: false, message: 'Authorization token is required.' });
    }

    const decoded = jwt.verify(authorization, process.env.JWT_SECRET);

    if(decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
      return res.status(401).json({ success: false, message: 'Invalid token.' });
    }
    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: 'Invalid token.' });
  }
};

export default authAdmin;
