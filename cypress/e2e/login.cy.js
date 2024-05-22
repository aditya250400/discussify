/* eslint-disable import/no-extraneous-dependencies */
/**
 * - Login spec
 *   - should display login page correctly
 *   - should display popup message when email is empty
 *   - should display popup message when email is no valid with any value
 *   - should display popup message when password is empty
 *   - should display popup message when email and password are wrong
 *   - should display homepage when email and password are correct
 */
import { message } from 'antd';

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('should display login page correctly', () => {
    cy.visit('http://localhost:5173');

    cy.get('input[placeholder="Insert your email"]').should('be.visible');
    cy.get('input[placeholder="Insert your password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display popup message when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();

    cy.on(`${message}`, (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display popup message when email is no valid with any value', () => {
    cy.get('input[placeholder="Insert your email"]').type('kazuma');
    cy.get('button').contains(/^Login$/).click();

    cy.on(`${message}`, (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display popup message when password is empty', () => {
    cy.get('input[placeholder="Insert your email"]').type('kazuma@gmail.com');

    cy.get('button').contains(/^Login$/).click();

    cy.on(`${message}`, (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display popup message when email and password are wrong', () => {
    cy.get('input[placeholder="Insert your email"]').type('kazumaaaa@gmail.com');

    cy.get('input[placeholder="Insert your password"]').type('1234566');

    cy.get('button').contains(/^Login$/).click();

    cy.on(`${message}`, (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Insert your email"]').type('kazuma@gmail.com');

    cy.get('input[placeholder="Insert your password"]').type('123456');

    cy.get('button').contains(/^Login$/).click();

    cy.get('h3').contains(/^Discussify$/).should('be.visible');
  });
});
