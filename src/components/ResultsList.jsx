export default function ResultList({ data }) {

  //  rendering data
  return (
    <ul className="summary-list">
      {
        data.map((item, i) => (
          <div key={i} className="summary-item" style={{ backgroundColor: `hsla(${item.color},6%)` }}>
            <div className="summary-left">
              <img src={item.icon} alt={item.category} />
              <p style={{ color: `hsl(${item.color})`, marginLeft: "15%" }}>{item.category}</p>
            </div>
            <p>{item.score} <span className="cGreen">/ 100</span></p>
          </div>
        ))
      }
    </ul>
  );
}