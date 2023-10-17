import * as joi from 'joi';

export const joiValidationSchema = joi.object({
  port: joi.number().default(3005),
  mongoUri: joi.string(),
});
