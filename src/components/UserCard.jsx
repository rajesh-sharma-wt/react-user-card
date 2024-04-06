import '../assets/css/user-card.css';

export function UserCard({name, phoneNumber, age, address}){
    return (
        <div className="card">
            <p className="name">{name}</p>
            <p> <label className="label"> Age: </label><span>{age}</span> </p>
            <p> <label className="label"> Phone: </label><span>{phoneNumber}</span> </p>
            <p> <label className="label"> Address: </label><span>{address}</span> </p>
        </div>
    )
}