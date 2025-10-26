


function Card(props){


    return(
        <div className="card">
            <div>

                <img src={props.img_path} alt={props.alt} />
            </div>
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default Card