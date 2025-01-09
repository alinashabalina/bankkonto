import "./commands"


export {}
declare global {
    namespace Cypress {
        interface Chainable {
            login(): Chainable<void>;
            getAccount(): Chainable<void>
        }
    }
}