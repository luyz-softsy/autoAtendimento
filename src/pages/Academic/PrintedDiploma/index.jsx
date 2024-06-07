import CardCheckout from "../../../components/CardCheckout";
import Footer from "../../../components/Footer";

const PrintedDiploma = () => {

    const style = {
        backgroundColor: "#019ED3"
    }

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className='list-subjects'>
                    <CardCheckout text="Por favos envie os documentos"/>
                </div>
            </div>
            <div className='footer-container'>
                <Footer text="Relatar Problema" route="" style={style} />
            </div>
        </main>
    );
    
}

export default PrintedDiploma;