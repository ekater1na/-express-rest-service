const router = require('express').Router();
const createError = require('http-errors');
const catchErrors = require('../../helpers/catchErrors');
const config = require('../../common/config');
const loginService = require('./login.service');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

router.route('/').post(
  catchErrors(async (req, res) => {
    const user = await loginService.add(req.body);
    if (!user) {
      throw createError(403, `User '${JSON.stringify(req.body)}' Forbidden `);
    }
    user.comparePass(req.body.password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 3600 * 24
        });

        res.json({
          success: true,
          token: `JWT${token}`,
          user: {
            id: user._id,
            name: user.name,
            login: user.login,
            email: user.email
          }
        });
      } else return res.json({ success: false, msg: "Passwords don't match" });
    });
  })
);

module.exports = router;
