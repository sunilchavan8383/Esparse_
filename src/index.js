import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/loginPage/LoginPage";
import Forgot from "./components/ForgotPassPage/ForgotPass"; 
import Reg from './components/RegPage/Reg';                     
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Verification from './components/VerificationPage/Verify';
import DashBoard from './components/DashBoard/DashBoard';
import Dashboardfeature from './components/DashBoard/DashboardFeature/Dashboardfrature';
import Requests from './components/DashBoard/RequestPage/RequestPage';
import ClientPage from './components/DashBoard/ClientPage/ClientPage';
import DocumentManage from './components/DashBoard/DocumentManage/DocumentManage';
import QuotationManage from './components/DashBoard/QuotationManage/QuotationManage';
import InvoiceManage from './components/DashBoard/QuotationManage/InvoicePage/InvoicePage';
import Quotation from './components/DashBoard/QuotationManage/QuotationPage/Quotation';
import Payment from './components/DashBoard/Payment/Payment';
import Report from './components/DashBoard/ReportPage/Report';
import Setting from './components/DashBoard/Setting/Setting';
import ClientForm from './components/DashBoard/ClientPage/ClientForm/ClientForm';
import ClientForm2 from './components/DashBoard/ClientPage/ClientForm2/ClientForm2';
import DocumentForm from './components/DashBoard/DocumentManage/DocumentForm/DocumentForm';
import MyProfile from './components/DashBoard/Setting/SettingOptions/MyProfile/MyProfile';
import Preferences from './components/DashBoard/Setting/SettingOptions/Preferences/Preferences';
import AuthSettings from './components/DashBoard/Setting/SettingOptions/Security/Security';
import LogoutModal from './components/DashBoard/Setting/SettingOptions/LogOut/LogOut';
import Support from './components/DashBoard/Support/Support';
import ClientModal from './components/DashBoard/ClientPage/ClientModal/ClientModal';



//Customer Portal

import CustDash from './customerPortal/CustDashboard/CustDashBoard';
import CustomerDashboard from './customerPortal/CustDashboard/CostumerDashboard/CustumerDashboard';
import TaxFilling1 from './customerPortal/CustDashboard/IncomeTaxFilling/TaxFilling1/TaxFilling1';
import IncomeTaxFilling from './customerPortal/CustDashboard/IncomeTaxFilling/IncomeTaxFilling';
import TaxConsultant from './customerPortal/CustDashboard/TaxConsultant/TaxConsultant';
import FilesTable from './customerPortal/CustDashboard/CustomerDocument/CustomerDocument';
import CustomerSupport from './customerPortal/CustDashboard/CustomerSupport/CustomerSupport';
import FAQAccordion from './customerPortal/CustDashboard/Faq/Faq';
import UserSettings from './customerPortal/CustDashboard/Setting/CustSettings';
import ProfileSettings from './customerPortal/CustDashboard/Setting/CustSettingOptions/CustMyProfile/CustMyProfile';
import UserPreferences from './customerPortal/CustDashboard/Setting/CustSettingOptions/Preferences/CustPreferences';
import IncomeForm from './customerPortal/CustDashboard/IncomeTaxFilling/TaxFilling2/TaxFilling2';
import TaxDetailsForm from './customerPortal/CustDashboard/IncomeTaxFilling/TaxFilling3/TaxFilling3';
import TaxFilling4 from './customerPortal/CustDashboard/IncomeTaxFilling/TaxFilling4/TaxFilling4';
import CAProfile from './customerPortal/CustDashboard/TaxConsultant/ConsultatntProfile/CostumerProfile/CustmerProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/registration",
    element: <Reg />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/admin-dashboard",
    element: <DashBoard />,
    children: [
      { path: "dashboard", element: <Dashboardfeature /> },
      { path: "pending-approvals", element: <Requests /> },
      { path: "client-management", element: <ClientPage />, 
        children:[
          {index: true, element:<ClientForm/>},
          { path: "Buissness", element: <ClientForm /> },
          { path: "Client", element: <ClientForm2 /> },
          { path: "Client-profile", element: <ClientModal/> },
        ]
      },
      { path: "document-management", element: <DocumentManage /> ,
        children: [
          { index: true, element: <DocumentForm /> }, 
          { path: "all-documents", element: <DocumentForm/> },
        ],
      },
      { path: "gst-filing", element: <div>GST Filing Content</div> },
      {
        path: "quotation-invoice",
        element: <QuotationManage />,
        children: [
          { index: true, element: <Quotation /> }, 
          { path: "quotation", element: <Quotation /> },
          { path: "invoice", element: <InvoiceManage /> },
        ],
      },
      
      { path: "payment", element: <Payment/> },
      { path: "report", element: <Report/> },
      { path: "support", element: <Support/> },
      { path: "settings", element: <Setting/>, 
        children:[
          {index: true, element:<MyProfile/>},
          { path: "profile", element: <MyProfile /> },
          { path: "preferences", element: <Preferences/> },
          { path: "security", element: <AuthSettings/> },
          { path: "logout", element: <LogoutModal/> },
        ],
      },
    ],
  },

  {
    path: "/customer-dashboard",
    element:<CustDash />,
    children: [
      {index: true, element:<CustomerDashboard  />},
      { path: "customer-dashboard", element: <CustomerDashboard  /> },
      { path: "income-tax-filling", element: <IncomeTaxFilling/>,
        children: [
          {index: true, element:<TaxFilling1/>},
          {path: "basic-details", element: <TaxFilling1/>},
          {path: "income-details", element: <IncomeForm/>},
          {path: "deductions", element: <TaxDetailsForm/>},
          {path: "summary", element: <TaxFilling4/>}
        ],
       },
      { path: "tax-consultant", element: <TaxConsultant/>,
        children: [
          {path: "customer-profile", element: <CAProfile/>},
        ],
       }, 
      { path: "customer-documents", element: <FilesTable/> },
      { path: "customer-support", element: <CustomerSupport/> },
      { path: "FAQ", element: <FAQAccordion/> },
      { path: "customer-setting", element: <UserSettings/> ,
        children:[
          {index: true, element:<ProfileSettings /> },
          { path: "profile", element: <ProfileSettings /> },
          { path: "preferences", element: <UserPreferences/> },
          { path: "customer-security", element: <AuthSettings/> },
          { path: "customer-logout", element: <LogoutModal/> },
        ],
      }
    ],
  }
]);


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



