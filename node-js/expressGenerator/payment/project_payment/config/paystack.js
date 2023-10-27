// const https = require('https')

// const options = {
//   hostname: 'api.paystack.co',
//   port: 443,
//   path: '/transaction/verify/:reference',
//   method: 'GET',
//   headers: {
//     Authorization: 'Bearer sk_test_5d8fc5c845102da2b23b54946605ecff5a14de51'
//   }
// }

// https.request(options, res => {
//   let data = ''

//   res.on('data', (chunk) => {
//     data += chunk
//   });

//   res.on('end', () => {
//     console.log(JSON.parse(data))
//   })
// }).on('error', error => {
//   console.error(error)
// })

const request = require("request");

const paystack = () => {
    const secretKey = "Bearer sk_test_5d8fc5c845102da2b23b54946605ecff5a14de51"

    const initializePayment = (form, mycallback) => {
        const options = {
            url: "https://api.paystack.co/transaction/initialize",
            headers: {
                authorization: secretKey,
                "content-type": "application/json",
                "cache-control": "no-cache"
            },
            json: form // Mengirim data sebagai JSON
        };

        const callback = (error, response, body) => {
            if (error) {
                return mycallback(error, null);
            }
            if (response.statusCode !== 200) {
                return mycallback(new Error(`Status Code: ${response.statusCode}`), null);
            }
            return mycallback(null, body);
        };

        request.post(options, callback);
    };

    const verifyPayment = (ref, mycallback) => {
        const options = {
            url: `https://api.paystack.co/transaction/verify/${encodeURIComponent(ref)}`,
            headers: {
                authorization: secretKey,
                "content-type": "application/json",
                "cache-control": "no-cache"
            }
        };

        const callback = (error, response, body) => {
            if (error) {
                return mycallback(error, null);
            }
            if (response.statusCode !== 200) {
                return mycallback(new Error(`Status Code: ${response.statusCode}`), null);
            }
            return mycallback(null, body);
        };

        request(options, callback);
    };

    return { initializePayment, verifyPayment };
}

module.exports = paystack;
// const axios = require('axios');

// const paystack = () => {
//     const secretKey = "Bearer sk_test_5d8fc5c845102da2b23b54946605ecff5a14de51";

//     const initializePayment = async (form) => {
//         const headers = {
//             Authorization: secretKey,
//             'Content-Type': 'application/json',
//             'Cache-Control': 'no-cache',
//         };

//         try {
//             const response = await axios.post('https://api.paystack.co/transaction/initialize', form, { headers });
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     };

//     const verifyPayment = async (ref) => {
//         const headers = {
//             Authorization: secretKey,
//             'Content-Type': 'application/json',
//             'Cache-Control': 'no-cache',
//         };

//         try {
//             const response = await axios.get(`https://api.paystack.co/transaction/verify/${encodeURIComponent(ref)}`, { headers });
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     };

//     return { initializePayment, verifyPayment };
// };

// module.exports = paystack;

