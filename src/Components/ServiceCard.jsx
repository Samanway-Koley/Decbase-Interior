const ServiceCard = ({ ServiceIcon, ServiceTitle, ServiceDescription }) => {
    return (
        <>
            <div className="each-service">
                <img src={ServiceIcon} alt="img" />
                <h4>{ServiceTitle}</h4>
                <p>{ServiceDescription}</p>
            </div>
        </>
    )
}

export default ServiceCard