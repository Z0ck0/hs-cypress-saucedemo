export const UserRole = {
  STANDARD: "standard_user",
  LOCKED_OUT: "locked_out_user",
  PROBLEM: "problem_user",
  ERROR: "error_user",
} as const;

export type UserRoleType = typeof UserRole[keyof typeof UserRole];