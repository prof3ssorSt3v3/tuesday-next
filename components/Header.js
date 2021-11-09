export default function Header(props) {
  let page = props.page ? props.page : 'Cool Page';
  return (
    <header>
      <h1>This is MY Site</h1>
      <h2>The {page}</h2>
    </header>
  );
}
