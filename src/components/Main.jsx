const Main = (props) => {
    const tbody = props.matrix.map((tr, trIndex) => {
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
    const values = props.valuesData.map(i => <li key={i} data-value={i}>{i}</li>);
    

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
            <div className='errors'>Errors: {props.errors} / 3</div>
        </div>
    );
}
export default Main;