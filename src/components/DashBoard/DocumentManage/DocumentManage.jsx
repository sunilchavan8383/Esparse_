import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './DocumentManage.css';
import Line from './Images/Line.svg';
import MemImg from './Images/MemImg.svg'
function DocumentManage(){
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
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
            <div className='AllFiles'>
                <div className='AllFilesText'>All Files</div>
                  <div className='ButConatiner'>
                <div className='FilesOpt'>
                  <Link to='all-documents' >View All</Link>
                  <Link >Documents</Link>
                  <Link >Media Files </Link>
                  <Link >Pdfs</Link>
                </div>
               
                    <div className='filterandbuissness'>
                    <div className="filter-container">
      <div className="filter-button" onClick={toggleDropdown}>
        <span className="filter-icon">⚙️</span> Filters ▼
      </div>
      {isOpen && (
        <div className="filter-dropdown">
          <div className="filter-item">Documents</div>
          <div className="filter-item">Media Files</div>
          <div className="filter-item">Pdfs</div>
          
        </div>
      )}
    </div>
        <div className='AddBusiness'>Export</div>
        </div>
            </div>
            </div>
            <div className='DocumentForm'>
                <Outlet/>
            </div>
        </div>
    );
}
export default DocumentManage;