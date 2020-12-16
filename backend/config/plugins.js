module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey:"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",
        },
        settings: {
            defaultFrom: 'restaurantstrapitest@gmail.com',
            defaultReplyTo: 'restaurantstrapitest@gmail.com',
        },
    }
})