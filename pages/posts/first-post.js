import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
    <Head>
        <title>page 1</title>
    </Head>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpeg"
        width={150}
        height={150}
        alt="profile"
      />
      <h2>
        <Link href="/">
          <a>Back to homepage</a>
        </Link>
      </h2>
    </>
  );
}
