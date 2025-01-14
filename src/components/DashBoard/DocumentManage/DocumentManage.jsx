import React from "react";
import './DocumentManage.css';
import Line from './Images/Line.svg';
import MemImg from './Images/MemImg.svg'
function DocumentManage(){
    return(
        <div className='DocumentManageDiv'>
            <div className='DocManageBox'>
                <div className='Memory'>
                
                        <div className='MemoryImg'>
                            <img src={MemImg} alt="" />
                        </div>
                        <div className='MemoryCountText'>668 GB</div>
                       <div className='MemoryUsed'>used from 978 GB</div>
                </div>
                <div className='MemorybelowLine'>
                    <img src={Line} alt="" />
                </div>
                <div className='dataDiscribe'>
                    <div className='Describe1'>
                        <div className='BrownCircle'></div>
                        <div className='Describetext1'>----</div>
                    </div>
                    <div className='Describe2'>
                    <div className='PurpleCircle'></div>
                    <div className='Describetext1'>----</div>
                    </div>
                    <div className='Describe3'>
                    <div className='GreenCircle'></div>
                    <div className='Describetext1'>Spread Sheet</div>
                    </div>
                    <div className='Describe4'>
                    <div className='Brown2Circle'></div>
                    <div className='Describetext1'>Others</div>
                    </div>
                </div>
            </div>
            <div className='AllFiles'></div>
        </div>
    );
}
export default DocumentManage;