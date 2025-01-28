import React, {useRef} from 'react';
import './page_all__shablon.css';
import {useSelector} from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const PageAllShablon = () => {
    const printRef = useRef();
    const componentHeaderOne = useSelector((state) => state.componentsHeaderTextOne);
    const title = useSelector((state) => state.title);
    const text = useSelector((state) => state.text)

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element, { scale: 2 });
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
    };


    return (
        <>
            <div ref={printRef} className="page_shablon">
                {componentHeaderOne}
                <div className="title">
                    {title}
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
            <button style={{position:"absolute", bottom:'10px', right:'10px'}} onClick={handleDownloadPdf}>Download PDF</button>
        </>

    );
};

export default PageAllShablon;