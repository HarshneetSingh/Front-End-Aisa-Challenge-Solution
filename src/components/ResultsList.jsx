export default function ResultList({ data }) {

  //  rendering data
  return (
    <ul className="summary-list">
      {
        data.map((item, i) => (
          <div key={i} className="summary-item" style={{ backgroundColor: `hsla(${item.color},10%)` }}>
            <img src={item.icon} alt={item.category} />
            <p style={{ color: `hsl(${item.color})` }}>{item.category}</p>
            <p>{item.score} <span className="cGreen">/ 100</span></p>
          </div>
        ))
      }
    </ul>
  );
}