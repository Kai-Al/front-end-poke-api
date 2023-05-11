import { useState } from "react"
import { Button } from 'react-bootstrap';


export const OffsetButtons = ({ onNewOffset }) => {


    const [offset, setOffset] = useState(0);

    const handleOffsetChange = (increment) => {
        const newOffset = offset + increment;
        if (newOffset < 0) {
            return;
        }
        setOffset(newOffset);
        onNewOffset(newOffset);
    };

    return (
        <div style={{ paddingBottom: "3rem", display: "flex", justifyContent: "center" }}>
            <Button variant="primary" onClick={() => handleOffsetChange(-10)} className="me-2">Previous</Button>
            <Button variant="primary" onClick={() => handleOffsetChange(10)}>Next</Button>
        </div>

    );
}