import { MessageContent } from '@/utils/types/message-content';

export interface MessagesInterface{
    model: string;
    messages: Array<MessageContent>;
    user: string;
}