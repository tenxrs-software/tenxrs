import React from "react";

const NavigationBar = () => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'absolute' }}>
            <div style={{ maxWidth: '1440px', width: '100%', background: 'black', color: 'white', padding: '10px', zIndex: 999, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>TENXRS</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ marginRight: '20px' }}>Services</div>
                    <div style={{ marginRight: '20px' }}>Industries</div>
                    <div style={{ marginRight: '20px' }}>Our Process</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
