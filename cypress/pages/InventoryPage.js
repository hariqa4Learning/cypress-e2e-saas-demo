class InventoryPage {
    addBackpack() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    addBikeLight() {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }

    openCart() {
        cy.get('.shopping_cart_link').click();
    }

    sortLowToHigh() {
        // Ensure inventory page is fully loaded
        cy.url().should('include', '/inventory.html');

        cy.get('.inventory_list', { timeout: 10000 })
            .should('be.visible');

        cy.get('[data-test="product-sort-container"]')
            .should('be.visible')
            .select('lohi');
    }


    logout() {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    }
}

export default new InventoryPage();