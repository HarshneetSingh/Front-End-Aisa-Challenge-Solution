export default function ResultPopUp({ data }) {
    const score = data.reduce((acc, item) => acc + item.score, 0) / data.length;

    return (<section  className="result">
        <h2>Your Result</h2>
        <div className="score-circle">
            <p className="score-num">{Math.round(score)}</p>
            <span className="score-of">of 100</span>
        </div>
        <h3>Great</h3>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
    );
}