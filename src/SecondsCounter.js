import React from 'react';

const SecondsCounter = (props) => {
    let unit = props.seconds;
    let ten = 0;
    let hundred = 0;
    let thousand = 0;
    let tenThousand = 0;
    let hunThousand = 0;
    if(props.seconds > 9){
        ten =   Math.trunc(props.seconds / 10);
        unit = props.seconds % 10;
        if (ten > 9){
            hundred =  Math.trunc(ten / 10);
            ten = ten % 10;
            if(hundred > 9){
                thousand = Math.trunc(hundred / 10);
                hundred = hundred %  10;
                if(thousand > 9){
                    tenThousand = Math.trunc(thousand / 10);
                    thousand = thousand % 10;
                    if(tenThousand > 9){
                        hunThousand = Math.trunc(tenThousand / 10);
                        tenThousand = tenThousand % 10;
                    }
                }
            }
        }
    }
    return (
        <div className="app d-flex justify-content-center">
            <div className="icon box"><i className="far fa-clock"></i></div>
            <div className="counter box">{hunThousand}</div>
            <div className="counter box">{tenThousand}</div>
            <div className="counter box">{thousand}</div>
            <div className="counter box">{hundred}</div>
            <div className="counter box">{ten}</div>
            <div className="counter box">{unit}</div>
        </div>
    );
};

export default SecondsCounter;