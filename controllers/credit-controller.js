const Credit  = require('../models/credit-model');
const async   = require('async');

// Display credits in database 
exports.display_credits = (req, res, next) => {
  
  // Find all credits stored in database 
  Credit.find({})
      .exec((err, credits) => {
        // If error, continue 
        if (err) { return next(err); }
        // If successful, render index page with list of credits 
        res.render('index', {credits: credits });
      })
}


// Add Credit to Database 
exports.add_credits = (req, res, next) => {
  
  // Create a Credits object with inputted data 
  let credit = new Credit({ name: req.body.className, credits: req.body.numCredits, classId: req.body.classId });
  
  credit.save( (err) => {
    // If there's an error, continue on
    if (err) { return next(err) };
    
    console.log(credit)
    // If save was successful, redirect back to the home page 
    res.redirect('/');
    
  });
};

// Delete Credit from database 
exports.delete_credit = (req, res, next) => {
  
  // Delete credit from database 
  Credit.findById(req.body.creditId, (err, credit) => {
    credit.remove();
    credit.save();
    console.log(credit);
    
    // Credit deleted. Redirect back to index page 
    res.redirect('/');
  }); 
};