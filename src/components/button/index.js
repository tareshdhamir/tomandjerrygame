
export default function Button(props){
    return(
        <button className="button" onClick={props.handleButtonClick} value={props.value}>{props.value}</button>
    );
}