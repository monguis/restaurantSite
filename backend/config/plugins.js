module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIAJSPF2YP2DD63PG7A',
        secretAccessKey: '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',
        region: 'us-east-2',
        params: {
          Bucket: 'monguis-restaurant-bucket', 
        },
      },
    },
  });

//   accessKeyId: env('AWS_ACCESS_KEY_ID'),
//         secretAccessKey: env('AWS_ACCESS_SECRET'),