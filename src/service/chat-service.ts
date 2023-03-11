import { MessagesInterface } from '@/utils/interfaces/messages-interface';
import { MessageContent } from '@/utils/types/message-content';
import axios from "axios";

export async function send(requestData: any) {
    var result: Array<MessageContent> = [];

    console.log(requestData);

    try {
        await axios.post('https://api.openai.com/v1/chat/completions', JSON.stringify(requestData), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.TOKEN_TYPE + ' ' + process.env.API_KEY
            }
        }).then(function (response) {
            response.data.choices.forEach((element: any) => {
                result.push(element.message)
            });
        },).catch(function (error) {
            throw error;
        },)
    } catch (error) {
        throw error;
    }



    return result;
}