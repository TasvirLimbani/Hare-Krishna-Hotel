interface RoomCardProps {
    image: string;
    title: string;
    description: string;
    size: string;
    bedType: string;
    guests: string;
    price: string;
    currency?: string;
    bookHref?: string;
}

export default function RoomCard({
    image, title, description, size, bedType, guests, price, currency = '$', bookHref = '#contact',
}: RoomCardProps) {
    return (
        <div className="room-card reveal">
            <div className="room-card__img" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="room-card__body">
                <h3 className="room-card__title">{title}</h3>
                <p className="room-card__desc">{description}</p>
                <div className="room-card__meta">
                    <span><i className="fa-solid fa-ruler-combined"></i> {size}</span>
                    <span><i className="fa-solid fa-bed"></i> {bedType}</span>
                    <span><i className="fa-solid fa-user"></i> {guests}</span>
                </div>
                <div className="room-card__footer">
                    <div className="room-card__price">
                        {currency}{price}<small>/night</small>
                    </div>
                    <a href={bookHref} className="btn btn--gold btn--sm">BOOK NOW</a>
                </div>
            </div>
        </div>
    );
}
