const Main = () => {
    const data = [
        [1, 0, 3, 5, 0, 6],
        [6, 5, 4, 3, 1, 0],
        [2, 0, 1, 0, 5, 3],
        [4, 3, 5, 6, 2, 1],
        [3, 4, 0, 1, 0, 5],
        [5, 1, 6, 2, 3, 0]
    ];
    const valuesData = [1, 2, 3, 4, 5, 6];
    const errors = 0;

    const tbody = data.map((tr, trIndex) => {
        return (
            <tr key={`_${trIndex}`}>{tr.map((td, index) => {
                return (
                    <td key={`_${trIndex}_${index}`}>
                        {td || ''}
                    </td>
                )
            })}
            </tr>
        )
    });
    const values = valuesData.map(i => <li key={i} data-value={i}>{i}</li>);
    

    return (
        <div className='container'>
            <table className='table'>
                <tbody>
                    {tbody}
                </tbody>
            </table>
            <ul className='values'>
                {values}
            </ul>
            <div className='errors'>Errors: {errors} / 3</div>
        </div>
    );
}
export default Main;