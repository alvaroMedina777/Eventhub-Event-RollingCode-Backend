import { validationResult, check } from "express-validator";
//preguntar si hay errores y mostrar un mapeo de todos los errores encontrados
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  next();
};
