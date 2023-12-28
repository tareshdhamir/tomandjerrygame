import Cell from '../cell';

function renderCell(value, declareWinner){
    if(value === 4){
     return <Cell key={value} cellNumber={value} additionalClassName="blackBg" declareWinner={declareWinner} />;
    }
    return <Cell key={value} cellNumber={value} additionalClassName=""  declareWinner={declareWinner}  />;
}

export default function Board(props){
    return (
      <div className='board'>
        <div className="row">
            {renderCell(1, props.declareWinner)}
            {renderCell(2, props.declareWinner)}
            {renderCell(3, props.declareWinner)}
            {renderCell(4, props.declareWinner)}
        </div>
        <div className="row">
            {renderCell(5, props.declareWinner)}
            {renderCell(6, props.declareWinner)}
            {renderCell(7, props.declareWinner)}
            {renderCell(8, props.declareWinner)}
        </div>
        <div className="row">
            {renderCell(9, props.declareWinner)}
            {renderCell(10, props.declareWinner)}
            {renderCell(11, props.declareWinner)}
            {renderCell(12, props.declareWinner)}
        </div>
        <div className="row">
            {renderCell(13, props.declareWinner)}
            {renderCell(14, props.declareWinner)}
            {renderCell(15, props.declareWinner)}
            {renderCell(16, props.declareWinner)}
        </div>
      </div>
    );
}