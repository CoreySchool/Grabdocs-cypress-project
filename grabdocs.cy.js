Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('GrabDocs Official Test Suite - Melodii', () => {

  beforeEach(() => {
    cy.viewport(1280, 720); 
  });

  it('Calendar, Files, and Workspace', () => {
    
    cy.visit('https://app.grabdocs.com/login');
    cy.wait(3000);
    cy.get('#username').should('be.visible').type('Melodii'); 
    cy.wait(3000);
    cy.get('input[type="password"]').should('be.visible').type('Momis2awsome091309!'); 
    cy.wait(3000);
    cy.get('button[type="submit"]').click();
    
    cy.pause(); 

    
    cy.contains('Calendar').click({ force: true });
    cy.wait(3000); 

    cy.contains('button', 'New Event').click({ force: true });
    cy.wait(3000);

    cy.get('input[placeholder="Team Meeting, Client Call, etc."]')
      .type('placeholder event');
    cy.wait(3000);

    cy.get('textarea[placeholder*="details"]').first()
      .type('placeholder description');
    cy.wait(3000);

    cy.get('input[placeholder="Conference Room A"]').first()
      .type('placeholder location');
    cy.wait(3000);

    cy.get('button').contains('Create Event').click({ force: true });
    cy.wait(3000);
    
    cy.contains('placeholder event').should('be.visible');
    cy.wait(3000);

    
    cy.get('.rbc-event-content').contains('placeholder event').click({ force: true });
    cy.wait(3000);

    cy.get('.flex.space-x-1').find('button').eq(0).click({ force: true });
    cy.wait(3000);

    cy.get('input[placeholder*="Team Meeting, Client Call, etc."]')
      .click({ force: true })
      .clear({ force: true })
      .type('workspace title', { force: true });
    cy.wait(3000);

    cy.get('textarea[placeholder*="Add details about the event..."]')
      .click({ force: true })
      .clear({ force: true })
      .type('workspace description', { force: true });
    cy.wait(3000);

    cy.get('input[type="date"]')
      .first() 
      .click({ force: true })
      .clear({ force: true })
      .type('2026-04-26', { force: true }); 
    cy.wait(3000);

    cy.get('input[type="date"]')
      .eq(1) 
      .click({ force: true })
      .clear({ force: true })
      .type('2026-04-26', { force: true }); 
    cy.wait(3000);

    cy.get('button[type="submit"]').contains('Update Event').click({ force: true });
    cy.wait(3000);

    
    cy.contains('Calendar').click({ force: true });
    cy.wait(3000);

    cy.get('.rbc-event-content').contains('workspace title').click({ force: true });
    cy.wait(3000);

    cy.get('.flex.space-x-1').find('button').eq(1).click({ force: true });
    cy.wait(3000);

    cy.get('button').contains('Delete').click({ force: true });
    cy.wait(3000);

    
    cy.get('a[title="Files"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.get('input[type="file"]')
      .first() 
      .selectFile('cypress/fixtures/Weather Document.txt', { force: true });

    cy.wait(15000); 
    cy.reload();
    cy.wait(3000);
    
    cy.get('button[data-kebab-button="true"]').first().click({ force: true });
    cy.wait(3000);

    cy.contains('Download').click({ force: true }); 
    cy.wait(3000);

    cy.get('button[title="Open file"]', { timeout: 10000 })
      .last() 
      .click({ force: true });
    cy.wait(3000);

    
    cy.get('a[title="Workspace"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.get('button[title="Shared Files"]').click({ force: true });
    cy.wait(3000); 
    cy.contains('button', 'Close').click({ force: true });
    cy.wait(3000);

    cy.get('button[title="View Members"]').click({ force: true });
    cy.wait(3000);
    cy.get('button.text-gray-400').find('svg.h-5.w-5').parent().click({ force: true });
    cy.wait(3000);

    cy.get('button[title="Start Chat"]').should('be.visible').click({ force: true });
    cy.wait(3000); 

    cy.get('textarea[placeholder*="Type a message"]')
      .click({ force: true })
      .type('hello team', { force: true });
    cy.wait(3000);
    cy.get('textarea[placeholder*="Type a message"]')
      .parent().parent().find('button').click({ force: true });

    cy.wait(3000);
    cy.get('a[title="Workspace"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.contains('button', 'Create Workspace').click({ force: true });
    cy.wait(3000);

    cy.get('input[placeholder*="Enter workspace name"]')
      .click({ force: true })
      .type('Melodii work', { force: true });
    cy.wait(3000);

    cy.get('textarea[placeholder*="Enter workspace description"]')
      .click({ force: true })
      .type('placeholder description', { force: true });
    cy.wait(3000);

    cy.get('.rounded-lg.shadow-xl').find('button').contains('Create').click({ force: true });
    cy.wait(3000);

    
    cy.get('button[title="Invite Member"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.get('textarea[placeholder*="user1@example.com"]')
      .click({ force: true })
      .type('associate1@example.com', { force: true });
    cy.wait(3000);

    cy.get('button').contains('Send Invitation').click({ force: true });
    
    cy.wait(10000);

    cy.get('button[title="View Invitations"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.on('window:confirm', () => true); 

    cy.get('button[title="Cancel Invitation"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.get('button').find('svg.h-5.w-5').first().parent().click({ force: true });
    cy.wait(3000);

    cy.contains('button', 'Cancel').click({ force: true });
    cy.wait(3000);

    
    cy.get('button[title="Rename workspace"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.get('input[value="Melodii work"]')
      .click({ force: true })
      .clear({ force: true })
      .type("Corey's Public Workspace", { force: true });
    cy.wait(3000);

    cy.get('button[title="Save"]').click({ force: true });
    cy.wait(3000);

    cy.get('button[title="Delete Workspace"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.on('window:confirm', () => true);

    
    cy.get('a[title="Files"]').should('be.visible').click({ force: true });
    cy.wait(3000);

    cy.get('button[data-kebab-button="true"]').first().click({ force: true });
    cy.wait(3000);

    cy.contains('Delete').click({ force: true }); // Swapped Download for Delete
    cy.wait(3000);

    cy.on('window:confirm', () => true); // Handle final confirmation popup
  });

});
