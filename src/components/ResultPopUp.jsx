export default function ResultPopUp({ data }) {
    const score = data.reduce((acc, item) => acc + item.score, 0) / data.length;

    return (
        <section className="result">
            
            <p className="fw-400 cLavender" style={{ position: "sticky", top: "0"}}>Your Result</p>
            <div className="score-circle">
                <p className="score-num" >{Math.round(score)}</p>
                <span className="fs-15 " style={{color:"var(--green)",position: "sticky", bottom: "0"}}>of 100</span>
            </div>
            <div style={{ position: "absolute", bottom: "0px", left: "0px", padding: "20px 2rem"}}>
                <p style={{ marginBottom: 0, fontSize: "23px", fontWeight: "bold" }}>Great</p>
                <p className="fw-400 fs-15 cLavender" style={{ marginTop: "2px" }}>You scored higher than 65% of the people who have taken these tests.</p>
            </div>

        </section>
    );
}