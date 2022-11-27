
export const cardSchemaValidation = {
    schema : {
        body: {
            type:"object",
            required: ["card_number", "card_name", "card_cvv", "card_date"],
            additionalProperties: false,
            properties: {
                card_name: { type:"string", format:"name"},
                card_number: { type:"string", format: "cardNumber"},
                card_cvv: { type:"string", format: 'cvv' },
                card_date: { type:"string", format: 'cardDate'},
            },
        }
    }
}

