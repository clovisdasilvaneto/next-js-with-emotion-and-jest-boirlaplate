import Head from 'next/head';
import Text from 'src/shared/Text';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text>Hey, I'm using emotion with theme!</Text>
    </div>
  );
}
