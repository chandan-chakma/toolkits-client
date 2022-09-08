import React from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const { purchaseId } = useParams();
    return (
        <div>
            <h4>this is purchase page{purchaseId}</h4>
        </div>
    );
};

export default PurchasePage;