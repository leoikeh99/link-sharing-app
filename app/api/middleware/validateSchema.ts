export default function validateSchema(reqBody: any, schema: any) {
  const validate = schema.safeParse(reqBody);

  return {
    success: validate.success,
    errors: validate.error?.issues,
    data: validate.data,
  };
}
