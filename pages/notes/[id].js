// /pages/notes/[id].js
// /notes/:id - id is the variable name

import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Notes.module.css';

export default function NoteDetails(props) {
  const router = useRouter();
  const { id } = router.query;
  //id is the variable from the filename

  return (
    <div className={styles.note}>
      <h1>Welcome to Notes Details</h1>
      <h2>This is Note {id} is note number.</h2>
      <p>
        <Link href="/notes">
          <a>Back To Notes List</a>
        </Link>
      </p>
    </div>
  );
}
