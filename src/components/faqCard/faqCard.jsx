import React, { useState } from "react"
import Faq from "react-faq-component"
import {faq} from "../../data"
import "./faqCard.css"

export default function WithCssStyleComp() {
    const [rows, setRowsOption] = useState(null);

    return (
        <div>
            <div className="faq-style-wrapper">
                <Faq data={faq} getRowOptions={setRowsOption} />
            </div>
        </div>
    );
}