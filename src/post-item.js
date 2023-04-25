import { DynamoDB } from 'aws-sdk';
const dynamodb = new DynamoDB.DocumentClient();

export async function handler(event) {
    let responseBody = ''
    let statusCode = 0
    let {id, price} = JSON.parse(event.body);
    
    const params = {
      TableName : 'Items',
      Item: {
         id: id,
         price: price
      }
    }
    
    try {
        await dynamodb.put(params).promise();
        statusCode = 200;
        responseBody = JSON.stringify('Item inserido!');
    } catch (err) {
        statusCode = 200;
        responseBody = JSON.stringify(err);
    }
      
    const response = {
        statusCode: statusCode,
        body: responseBody,
    };
    
    return response;
}