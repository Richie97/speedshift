/** Field length caps, shared by the form's maxLength and the API's validation. */
export const contactLimits = {
  name: 120,
  email: 200,
  company: 120,
  message: 3000,
} as const;
