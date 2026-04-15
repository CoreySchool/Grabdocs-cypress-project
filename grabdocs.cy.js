Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('GrabDocs Official Test Suite - Melodii', () => {

  beforeEach(() => {
    cy.viewport(1280, 720); 
  });

  it('Requirement 1: Calendar - Create New Event', () => {
    cy.visit('https://app.grabdocs.com/login');
    cy.get('#username').should('be.visible').type('Melodii'); 
    cy.get('input[type="password"]').should('be.visible').type('Momis2awsome091309!'); 
    cy.get('button[type="submit"]').click();
    
    cy.pause(); 

    cy.contains('Calendar').click({ force: true });
    cy.wait(2000); 

    cy.contains('button', 'New Event').click({ force: true });

    cy.get('input[placeholder="Team Meeting, Client Call, etc."]')
      .type('placeholder title');

    cy.get('textarea[placeholder*="details"]').first()
      .type('placeholder description');

    cy.get('input[placeholder="Conference Room A"]').first()
      .type('placeholder location');

    cy.get('button').contains('Create Event').click({ force: true });
    
    cy.contains('placeholder title').should('be.visible');
  });

  it('Requirement 2:Upload & Open File', () => {
    cy.visit('https://app.grabdocs.com/login');
    cy.get('#username').should('be.visible').type('Melodii'); 
    cy.get('input[type="password"]').should('be.visible').type('Momis2awsome091309!'); 
    cy.get('button[type="submit"]').click();
    
    cy.pause(); 

    cy.get('a[title="Files"]').should('be.visible').click({ force: true });
    cy.url().should('include', '/files');

    cy.get('input[type="file"]')
      .first() 
      .selectFile('cypress/fixtures/Weather Document.txt', { force: true });

    cy.wait(30000); 
    cy.reload();
    
    cy.contains('Pending', { timeout: 10000 }).should('not.exist');

    cy.get('button[title="Open file"]', { timeout: 10000 })
      .last() 
      .click({ force: true });
  });

  it('Requirement 3: Workspace', () => {
    cy.visit('https://app.grabdocs.com/login');
    cy.get('#username').should('be.visible').type('Melodii'); 
    cy.get('input[type="password"]').should('be.visible').type('Momis2awsome091309!'); 
    cy.get('button[type="submit"]').click();
    
    cy.pause(); 

    cy.get('a[title="Workspace"]').should('be.visible').click({ force: true });
    cy.url().should('include', '/workspaces');

    cy.get('button[title="Shared Files"]').click({ force: true });
    cy.wait(10000); 
    cy.contains('button', 'Close').click({ force: true });

    cy.get('button[title="View Members"]').click({ force: true });
    cy.get('button.text-gray-400').find('svg.h-5.w-5').parent().click({ force: true });

    cy.get('button[title="Start Chat"]').should('be.visible').click({ force: true });
    cy.wait(2000); 

    cy.get('textarea[placeholder*="Type a message"]')
      .click({ force: true })
      .type('hello team', { force: true });
    cy.get('textarea[placeholder*="Type a message"]')
      .parent().parent().find('button').click({ force: true });

    cy.wait(3000);
    cy.get('a[title="Workspace"]').should('be.visible').click({ force: true });

    cy.contains('button', 'Create Workspace').click({ force: true });

    cy.get('input[placeholder*="Enter workspace name"]')
      .click({ force: true })
      .type('Melodii work', { force: true });

    cy.get('textarea[placeholder*="Enter workspace description"]')
      .click({ force: true })
      .type('placeholder description', { force: true });

    cy.wait(2000);
    cy.get('.rounded-lg.shadow-xl').find('button').contains('Create').click({ force: true });
  });

});