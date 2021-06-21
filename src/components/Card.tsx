
interface CardProps {
    title: string,
    className: string
}

const Card: React.FC<CardProps> = ({children, title, className=""}) => {
    return (
        <div className={`rounded-grey-border ${className}`}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Card;