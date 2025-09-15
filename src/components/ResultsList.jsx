
export default function ResultList({ data }) {

  //  rendering data
  return (
    <ul>
      {
        data.map((item, i) => (
          <li key={i}>
            {item.category}: {item.score} / 100
          </li>
        ))
      }
    </ul>
  );
}