const Schemes = require('./scheme-model');
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  const validSchemes = await Schemes.find();
  const validId = validSchemes.filter(sc => sc.scheme_id == req.params.scheme_id);
  if (!validId[0]) {
    res.status(404).json({ message: `scheme with scheme_id ${req.params.scheme_id} not found` });
    return;
  }
  next();
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body;
  if (!scheme_name || typeof scheme_name !== "string") {
    res.status(400).json({ message: "invalid scheme_name" });
    return;
  }
  next();
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const { instructions, step_number } = req.body;
  if (!instructions || typeof instructions !== "string" || step_number < 1 || typeof step_number !== "number") {
    res.status(400).json({ message: "invalid step" });
    return;
  }
  next();
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
