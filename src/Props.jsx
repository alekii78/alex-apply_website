import PropTypes  from 'prop-types'

function Props(props){
    return(
        <>
<h3>students details demonstrating use of props </h3>
<div className="student">
    <p>Name : {props.name}</p>
    <p> Age :{props.age}</p>
</div>
</>
    );
}
Props.propTypes={
name:PropTypes.string,
age: PropTypes.number
}

export default Props