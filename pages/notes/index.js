// /notes  - to display all notes. GET /api/notes
// /pages/notes/index.js
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
// <Image src="/image/.." height={150} width={400} />
import styles from '../../styles/Notes.module.css';
import Header from '../../components/Header';

export default function Notes(props) {
  const notes = new Array(15)
    .fill(1)
    .map((item, idx) => ({ id: idx, title: `Note: ${idx}` }));

  return (
    <div className={styles.note}>
      <Head>
        <title>Steve Rulez</title>
      </Head>

      <Header page="Notes page" />
      <h1 className={styles.other}>Welcome to the Notes page</h1>
      <p>index.js is the default home page for all folders.</p>
      {notes.map((note) => (
        <p key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>Go to number {note.id}</a>
          </Link>
        </p>
      ))}
    </div>
  );
}
