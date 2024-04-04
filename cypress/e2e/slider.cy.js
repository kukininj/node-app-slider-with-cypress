describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if gallery buttons work', function () {
    cy.visit('http://localhost:3000');
    cy.get('[data-swiper-slide-index=1]').should("have.class", "swiper-slide-next");
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('[data-swiper-slide-index=1]').should("have.class", "swiper-slide-visible");
    cy.wait(1000)
    cy.get('[data-swiper-slide-index=0]').should("have.class", "swiper-slide-prev");
    cy.get('.swiper-button-prev').click();
    cy.get('[data-swiper-slide-index=0]').should("have.class", "swiper-slide-visible");
  });
})
