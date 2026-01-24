import { UserRole, UserRoleType } from './enums/userRoles';

// Types for credentials and user role
export type UserCredentials = {
  username: string;
  password: string;
};


// Function to get user credentials based on role
export function getCredentials(role: UserRoleType): UserCredentials {
  switch (role) {
    case UserRole.STANDARD:
      return {
        username: Cypress.env('STANDARD_USER'),
        password: Cypress.env('PASSWORD'),
      };
    case UserRole.LOCKED_OUT:
      return {
        username: Cypress.env('LOCKED_OUT_USER'),
        password: Cypress.env('PASSWORD'),
      };
    case UserRole.PROBLEM:
      return {
        username: Cypress.env('PROBLEM_USER'),
        password: Cypress.env('PASSWORD'),
      };
    case UserRole.ERROR:
      return {
        username: Cypress.env('ERROR_USER'),
        password: Cypress.env('PASSWORD'),
      };
    default:
      throw new Error(`Invalid user role: ${role}`);
  }
}