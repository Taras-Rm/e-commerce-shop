import { InferType, number, object, string } from 'yup';

const configSchema = object({
  PORT: number().required(),
  DATABASE_URL: string().required(),
});

export const validateEnv = (
  config: Record<string, unknown>,
): InferType<typeof configSchema> => {
  return configSchema.validateSync(config);
};
