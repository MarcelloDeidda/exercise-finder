describe("testing homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Check page elements", () => {
    cy.dataCy("brand").should("exist");
    cy.dataCy("navbar-button").should("not.be.visible");
    cy.dataCy("welcome").should("exist");
    cy.dataCy("select").should("exist");
    cy.dataCy("form-button").should("exist");
  });

  it("Check select content", () => {
    [
      "Abs",
      "Biceps",
      "Brachialis",
      "Calves",
      "Chest",
      "Glutes",
      "Hamstrings",
      "Lats",
      "Obliquus externus abdominis",
      "Quads",
      "Serratus anterior",
      "Shoulders",
      "Soleus",
      "Trapezius",
      "Triceps"
    ].forEach(muscle => {
      cy.contains(muscle);
    })
  });
});

describe("testing exercise page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Check page elements", () => {
    cy.dataCy("form-button").click();
    cy.wait(500);

    cy.dataCy("navbar-button").should("be.visible");
    cy.dataCy("welcome").should("not.exist");
    cy.dataCy("exercise-card").should("exist");
    cy.dataCy("brand").should("exist").click();
    cy.wait(500);

    cy.dataCy("welcome").should("exist");
  });

  it("Check modal functionality", () => {
    cy.dataCy("form-button").click();
    cy.wait(500);

    cy.dataCy("navbar-button").click();
    cy.dataCy("modal").should("exist");
    cy.dataCy("modal-backdrop").should("exist").click({ force: true });

    cy.dataCy("modal").should("not.exist");
    cy.dataCy("modal-backdrop").should("not.exist");
  });

  it("Check form functionality", () => {
    [
      "Abs",
      "Biceps",
      "Brachialis",
      "Calves",
      "Chest",
      "Glutes",
      "Hamstrings",
      "Lats",
      "Obliquus externus abdominis",
      "Quads",
      "Serratus anterior",
      "Shoulders",
      "Soleus",
      "Trapezius",
      "Triceps"
    ].forEach(muscle => {
      cy.dataCy("select").select(muscle);
      cy.dataCy("form-button").click();

      cy.contains(`${muscle} Exercises`).should("exist");
      cy.dataCy("exercise-card").should("exist");
      cy.dataCy("brand").click();
    });
  });

  it("Check form functionality from exercise page", () => {
    cy.dataCy("form-button").click();
    [
      "Abs",
      "Biceps",
      "Brachialis",
      "Calves",
      "Chest",
      "Glutes",
      "Hamstrings",
      "Lats",
      "Obliquus externus abdominis",
      "Quads",
      "Serratus anterior",
      "Shoulders",
      "Soleus",
      "Trapezius",
      "Triceps"
    ].forEach(muscle => {
      cy.dataCy("navbar-button").click();

      cy.dataCy("select").select(muscle);
      cy.dataCy("form-button").click();

      cy.contains(`${muscle} Exercises`).should("exist");
      cy.dataCy("exercise-card").should("exist");
    });
  });
});