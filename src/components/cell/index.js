
export default function Cell(props){
  return <div className={`cell ${props.additionalClassName}`} data-cell={props.cellNumber} onClick={props.declareWinner} >{props.cellValue}</div>;
}
