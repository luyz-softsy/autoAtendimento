import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import SubjectAcd from "../pages/Academic/SubjectAcd";
import ReviewsNotes from "../pages/Academic/ReviewsNotes";
import AcademicRequests from "../pages/Academic/AcademicRequests";
import Expedition from "../pages/Academic/Expedition";
import UtilizationStudies from "../pages/Academic/UtilizationStudies";
import ProofRequest from "../pages/Academic/ProofRequest";
import Internship from "../pages/Academic/Internship";
import SubjectAva from "../pages/Ava/SubjectAva";
import ProblemsReviews from "../pages/Ava/ProblemsReviews";
import SubjectFinance from "../pages/Finance/SubjectFinance";
import RequestDocument from "../pages/Finance/RequestDocument";
import OutherSubjects from "../pages/Finance/OutherSubjects";
import MonthlyPayment from "../pages/Finance/MonthlyPayment";
import FiesSumare from "../pages/Finance/FiesSumare";
import CashBack from "../pages/Finance/CashBack";
import Charges from "../pages/Finance/Charges";
import PerformAccord from "../pages/Finance/PerformAccord";
import DataProvider, { DataContext } from "../contexts/DataProvider";
import { useContext, useEffect, useState } from "react";
import AddSwapPayment from "../pages/Finance/AddSwapPayment";
import {listRoutesAcademic, listRoutesFinanceiro} from "../hook/routes";


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/financeiro/*" element={<FinanceiroRoutes />} />
                    <Route path="/academico/*" element={<AcademicRoutes />} />
                    <Route path="/ava/*" element={<AvaRoutes />} />
                </Routes>
            </DataProvider>
        </BrowserRouter>
    );
};

const FinanceiroRoutes = () => {
    const {routeHeader} = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Financeiro')

    useEffect(() => {
        listRoutesFinanceiro.find( rt => {
            if(rt.route == location.pathname){
                setNameHeader(rt.header)
            }
        })
    })

    return (
        <>
            <Header txt={nameHeader} route={routeHeader} />
            <Routes>
                <Route path="/" element={<SubjectFinance />} />
                <Route path="/realizar-acordo" element={<PerformAccord />} />
                <Route path="/solicitar-documentos" element={<RequestDocument />} />
                <Route path="/acrescentar-ou-trocar-meios-de-pagamento" element={<AddSwapPayment />} />
                <Route path="/outros-assuntos" element={<OutherSubjects />} />
                <Route path="/outros-assuntos/mensalidades-servicos" element={<MonthlyPayment />} />
                <Route path="/outros-assuntos/fies-sumare" element={<FiesSumare />} />
                <Route path="/outros-assuntos/cashback" element={<CashBack />} />
                <Route path="/outros-assuntos/cobrança-indevida" element={<Charges />} />
            </Routes>
        </>
    );
};

const AcademicRoutes = () => {
    const {routeHeader} = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Acadêmico')

    useEffect(() => {
        listRoutesAcademic.find( rt => {
            if(rt.route == location.pathname){
                setNameHeader(rt.header)
            }
        })
    })

    return (
        <>
            <Header txt={nameHeader} route={routeHeader} />
            <Routes>
                <Route path="/" element={<SubjectAcd />} />
                <Route path="/avaliacoes-e-notas" element={<ReviewsNotes />} />
                <Route path="/solicitacoes-academicas" element={<AcademicRequests />} />
                <Route path="/expedicao-de-documentos" element={<Expedition />} />
                <Route path="/expedicao-de-documentos/aproveitamento-de-estudos" element={<UtilizationStudies />} />
                <Route path="/expedicao-de-documentos/solicitacao-de-prova" element={<ProofRequest />} />
                <Route path="/expedicao-de-documentos/estagio" element={<Internship />} />
            </Routes>
        </>
    );
};

const AvaRoutes = () => {
    const {routeHeader} = useContext(DataContext)
    const location = useLocation()
    const [nameHeader, setNameHeader] = useState('Acadêmico')

    useEffect(() => {
        listRoutesFinanceiro.find( rt => {
            if(rt.route == location.pathname){
                setNameHeader(rt.header)
            }
        })
    })

    return (
        <>
            <Header txt={nameHeader} route={routeHeader} />
            <Routes>
                <Route path="/" element={<SubjectAva />} />
                <Route path="/problemas-nas-avaliacoes" element={<ProblemsReviews />} />
            </Routes>
        </>
    );
};

export default RoutesApp;
