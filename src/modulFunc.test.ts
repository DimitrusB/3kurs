let pad: any = ''
describe('pad function', () => {
    test('should return a string with a leading zero when the value is less than 10', () => {
        // Arrange
        const value = 5

        // Act
        const result = pad(value)

        // Assert
        expect(result).toBe('05')
    })

    test('should return the value as a string when it is greater than or equal to 10', () => {
        // Arrange
        const value = 15

        // Act
        const result = pad(value)

        // Assert
        expect(result).toBe('15')
    })
})
