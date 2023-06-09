import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/conservation.module.css'
import InputMessage from '@/components/input-message'
import { SetStateAction, useEffect, useState } from 'react'
import { MessagesInterface } from '@/utils/interfaces/messages-interface'
import { send } from '@/service/chat-service'
import { useRouter } from 'next/router'
import { MessageContent } from '@/utils/types/message-content'

export default function Home() {
  const [countData, setCountData] = useState(0);
  const [requestBody, setRequestBody] = useState<MessagesInterface>();
  const [messages, setMessages] = useState<Array<MessageContent>>([]);

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }

  useEffect(() => {
    if (countData == 0) {
      initMessage();
    }
  }, [messages])

  async function initMessage() {
    setCountData(1);

    var ms: Array<MessageContent>;

    setMessages([{
      "role": "user", "content": "Hi",
    }])

    try {
      ms = [
        {
          "role": "user", "content": "Hi",
        }
      ];

      console.log("req ===> " + requestBody);

      await send({
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": "Hi" }],
        "user": "user-1234"
      }).then((newMessages) => {
        console.log(newMessages);

        newMessages.forEach(element => {
          ms.push(element);
          console.log(ms);
        });
      });

    } catch (error) {
      throw error;
    }
    setMessages(ms);
  }


  async function handleMessage(event: any) {
    event.preventDefault();

    var oldMessages: Array<MessageContent>;

    if (messages.length >= 1) {
      oldMessages = messages;

      oldMessages.push({
        "role": "user", "content": event.target.message.value,
      })
    } else {
      oldMessages = [
        {
          "role": "user", "content": event.target.message.value,
        }
      ];
    }

    refreshData();

    try {
      await send({
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": event.target.message.value }],
        "user": "user-1234"
      }).then((newMessages) => {
        console.log(newMessages);

        newMessages.forEach(element => {
          oldMessages.push(element);
          console.log(oldMessages);
        });

        if (oldMessages != null && oldMessages.length >= 1) {
          setMessages(oldMessages);
        }

      }).finally(() => refreshData());
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <Head>
        <title>Chat GPT API</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='vh-100 d-flex justify-content-center'>
        <div className='w-75' >
          <div className={styles.body}>

            <ul>
              {messages?.map((message: MessageContent, i) => (
                <li key={i} className='text-black'>{message.content}</li>
              ))}
            </ul>
          </div>
          <div className={styles.messageInput}>
            <InputMessage handleMessage={handleMessage} />
          </div>
        </div>
      </main>
    </>
  )
}
