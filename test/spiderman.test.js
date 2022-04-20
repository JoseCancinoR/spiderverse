describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        // Aqui escribimos el código que queremos usar tal cuál
        // Quiero probar instaciar un objeto Spiderman con esta información
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        // Validamos que este código funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");
    });
})