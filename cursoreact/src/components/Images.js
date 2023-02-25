import other from "../assets/otherimg.jpg"

const Images = () => {

    return (
        <div>
            <img src="/Angular.png" alt="logoAngular" />
            <img src={other} alt="dockerGang" />
        </div>
    )
}
export default Images;