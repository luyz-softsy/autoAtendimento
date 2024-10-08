import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DefaultButton from "../../../components/DefaultButton";
import Footer from "../../../components/Footer";
import { useRA } from "../../../contexts/RAContext";
import { url_base_local } from "../../../services/url_base";
import "./reEnrollment.css";

const ReEnrollment = () => {
    const navigate = useNavigate();
    const [validateReEnrollment, setValidateReEnrollment] = useState([]);
    const [reEnrollment, setReEnrollment] = useState(null);
    const MySwal = withReactContent(Swal);
    const { currentRA } = useRA();

    const footerStyle = {
        backgroundColor: "var(--secondary-light-red)"
    };

    const formatDateBR = (dateString) => {
        if (!dateString) return '';
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    async function getValidateReEnrollment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/validaRematricula/aluno/${currentRA.ra}`);
            const data = response.data;

            if (data.length > 0) {
                setValidateReEnrollment(data);
            } else {
                setValidateReEnrollment([]);
            }

        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível fazer validação da rematrícula. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    async function getReEnrollment() {
        MySwal.showLoading();

        try {
            const response = await axios.get(`${url_base_local}/dataRematricula/${currentRA.ra}`);
            const data = response.data;

            if (data) {
                setReEnrollment(data);
            } else {
                setReEnrollment(null);
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível buscar as datas da rematrícula. Tente novamente mais tarde.',
                confirmButtonText: 'OK'
            });
        } finally {
            MySwal.close();
        }
    }

    useEffect(() => {
        getValidateReEnrollment();
        getReEnrollment();
    }, [currentRA.ra]);

    const hasDebt = validateReEnrollment.some(item =>
        item.includes("devendo mais de uma mensalidade") ||
        item.includes("devendo mais de R$200,00 de serviço")
    );

    return (
        <main className='main-perform-accord'>
            <div className="rescue-checks">
                <div className="card-checkout-re">
                    {reEnrollment ? (
                        <>
                            <span>Sua Rematrícula será efetuada de forma automática em:
                                <b>{formatDateBR(reEnrollment.dataRema)}</b>
                            </span>
                        </>
                    ) : (
                        <span>Não há informações de rematrícula disponíveis.</span>
                    )}

                    {hasDebt && (
                        <>
                            <span>Para tanto basta estar em dia com suas mensalidades.</span>
                            <DefaultButton
                                text="Regularizar Financeiro"
                                backgroundColor="var(--primary-light-blue)"
                                color='#fff'
                                onClick={() => navigate("/financeiro/realizar-pagamento")}
                            />
                        </>

                    )}
                </div>
            </div>
            <Footer text="Relatar Problema" onClick={() => navigate("abrir-demanda")} style={footerStyle} />
        </main>
    );
}

export default ReEnrollment;
