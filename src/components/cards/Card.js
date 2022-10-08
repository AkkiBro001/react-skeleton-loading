import './card.css';


const Card = ({data}) => {
    const {name, email, phone} = data;
    
    
    return (
        
    <div className="card">
        <div className="img">
            
            <img src={`https://joeschmoe.io/api/v1/${name}`} alt="" />
            
        </div>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <h4>{phone}</h4>
    </div>
        
    )
}

export default Card;