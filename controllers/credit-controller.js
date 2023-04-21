const Credit = require('../models/credit-model');

// Display credits in the database
exports.display_credits = (req, res, next) => {
  Credit.find({}).exec((err, credits) => {
    if (err) {
      return next(err);
    }
    res.render('index', { credits: credits });
  });
};

// Add Credit to the Database
exports.add_credits = (req, res, next) => {
  let credit = new Credit({
    courseName: req.body.courseName,
    credits: req.body.numCredits,
    courseCode: req.body.courseCode,
  });

  credit.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

// Delete Credit from the database
exports.delete_credit = (req, res, next) => {
  const creditId = req.params.id;

  Credit.findByIdAndRemove(creditId, (err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};